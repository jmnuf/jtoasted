
export class JToasty extends EventTarget {
    protected base_div:HTMLDivElement;
    protected text_div:HTMLDivElement;
    protected exit_btn:HTMLButtonElement;

    protected lines:string[];

    protected meta_data:Map<string, any>

    constructor(parent:HTMLElement, ...lines:string[]) {
        super();
        this.meta_data = new Map();
        this._create_base_html(parent);
        this.set_texts(lines);
        parent.appendChild(this.base_div);
    }

    private _create_base_html(parent:HTMLElement) {
        this._create_base_div(parent);
        this._create_exit_button();
        this._create_text_div();
    }

    private _create_base_div(parent:HTMLElement) {
        const div = document.createElement('div');
        div.classList.add('jtoasted');
        this.base_div = div;
        parent.appendChild(div);
    }

    private _create_text_div() {
        const div = document.createElement('div');
        div.classList.add('jtoasted-data');
        this.base_div.appendChild(div);
        this.text_div = div;
    }

    private _create_exit_button() {
        const btn = document.createElement('button');
        btn.classList.add('jtoasted-exit-btn');
        const div = this.base_div;
        btn.addEventListener('click', () => {
            const to_remove_event = new CustomEvent('user-remove', { cancelable: true, detail: { toasty:this } })
            if (!this.dispatchEvent(to_remove_event)) {
                return;
            }
            div.remove();
        });
        btn.innerHTML = '&cross;';
        div.appendChild(btn);
        this.exit_btn = btn;
    }

    private _create_data_line_p(text:string) {
        const element = document.createElement('p');
        element.classList.add('jtoasted-data');
        element.textContent = text;
        this.text_div.appendChild(element);
    }

    set_texts(value:string[]) {
        if (this.lines) {
            let kids = this.text_div.children;
            let minI = Math.min(value.length, kids.length);
            for (let i = 0; i < minI; i++) {
                const element = kids[i];
                element.textContent = value[i];
            }
            if (kids.length > minI) {
                for(let i = minI; i < kids.length; i++) {
                    kids[i].remove();
                }
            } else if (value.length > minI) {
                for(let i = minI; i < value.length; i++) {
                    const text = value[i];
                    this._create_data_line_p(text);
                }
            }
        } else {
            for (let i = 0; i < value.length; i++) {
                const text = value[i];
                this._create_data_line_p(text);
            }
        }
        this.lines = value.slice();
    }

    /**
     * Set the text of a line in the notification
     * 
     * @param index index of text line
     * @param value text to set at position
     * @returns whether the index was a valid index and the line was added
     */
    set_text_at(index:number, value:string):boolean {
        if (index < 0 || index > this.lines.length) {
            return false;
        }
        if (index == this.lines.length) {
            this._create_data_line_p(value);
            return true;
        }
        const kids = this.text_div.children;
        this.lines[index] = value;
        kids[index].textContent = value;
        return true;
    }

    get_texts() {
        return this.lines.slice();
    }

    has_metadata(key:string):boolean {
        return this.meta_data.has(key);
    }

    set_metadata<T>(key:string, value:T) {
        const old_value:T = this.meta_data.get(key);
        this.meta_data.set(key, value);
        const ev = new JToastyMetadataSetEvent<T>(key, value, old_value)
        this.dispatchEvent(ev);
    }

    get_metadata<T = any>(key:string):T {
        return this.meta_data.get(key) as T;
    }

    on(eventName:'metadata-set', callback:JToastyMetadataSetEventListener, options?:AddEventListenerOptions|boolean):void;
    on(eventName:string, callback:EventListenerOrEventListenerObject, options?:AddEventListenerOptions|boolean):void;
    on(eventName:string, callback:EventListenerOrEventListenerObject, options?:AddEventListenerOptions|boolean):void {
        this.addEventListener(eventName, callback, options);
    }
    off(eventName:string, callback:EventListenerOrEventListenerObject, options?:AddEventListenerOptions|boolean):void {
        this.removeEventListener(eventName, callback, options);
    }
}

export class JToastyProgess extends JToasty {

    constructor(parent:HTMLElement, data:{progress:number, finishat:number, apercent?:boolean, prefixing?:string}) {
        const { progress, finishat, apercent, prefixing } = data;
        if (typeof prefixing == 'string') {
            super(parent, prefixing, '');
        } else {
            super(parent);
        }
        this.on('metadata-set', JToastyProgess.PROGRESS_METADATA_LISTENER);
        this.meta_data.set(JToastyProgess.PROGRESS_METADATA_PREFIX + 'progress' , progress);
        this.meta_data.set(JToastyProgess.PROGRESS_METADATA_PREFIX + 'finish_at', finishat);
        this.set_metadata(JToastyProgess.PROGRESS_METADATA_PREFIX + 'as_percent', apercent);
    }


    set_progress(progress:number) {
        this.set_metadata(JToastyProgess.PROGRESS_METADATA_PREFIX + 'progress', progress);
    }


    get_progress():number {
        return this.get_metadata(JToastyProgess.PROGRESS_METADATA_PREFIX + 'progress');
    }

    finish_at(value:number):void;
    finish_at():number;
    finish_at(value?:unknown):any {
        const key = JToastyProgess.PROGRESS_METADATA_PREFIX + 'finish_at';
        if (typeof value != 'number') {
            return this.get_metadata(key);
        }
        this.set_metadata(key, value);
    }

    on(event:'metadata-set', callback:JToastyMetadataSetEventListener, options?:AddEventListenerOptions|boolean):void;
    on(event:'progress-updated'|'finishat-updated', callback:ValueUpdatedEventListner<number>, options?:AddEventListenerOptions|boolean):void;
    on(eventName:string, callback:EventListenerOrEventListenerObject, options?:AddEventListenerOptions|boolean):void;
    on(eventName:string, callback:EventListenerOrEventListenerObject, options?:AddEventListenerOptions|boolean):void {
        this.addEventListener(eventName, callback, options);
    }


    static get PROGRESS_METADATA_PREFIX() {
        return 'PROGRESS.';
    }

    static get PROGRESS_METADATA_LISTENER() {
        const PROGRESS_METADATA_PREFIX = JToastyProgess.PROGRESS_METADATA_PREFIX;
        return (ev:JToastyMetadataSetEvent<number>) => {
            const data = ev.detail;
            if (!data.key.startsWith(PROGRESS_METADATA_PREFIX)) {
                return;
            }
            const toasty:JToasty = ev.target as JToasty;
            const texts = toasty.get_texts();
            let index = texts.length - 1;
            if (texts.length == 0) {
                texts.length = 1;
            }
            let progress:number = toasty.get_metadata(PROGRESS_METADATA_PREFIX + 'progress');
            let finishat:number = toasty.get_metadata(PROGRESS_METADATA_PREFIX + 'finish_at');
            let percents:boolean = toasty.get_metadata(PROGRESS_METADATA_PREFIX + 'as_percent');
            const prefixx = progress >= finishat ? 'Completed - ' : 'Processing - ';
            const message = prefixx + (percents? `${(progress/finishat * 100).toFixed(2)}%` : `${progress} / ${finishat}`);
            texts[index] = `${prefixx}${message}`;
            toasty.set_texts(texts);
            if (data.key.substring(PROGRESS_METADATA_PREFIX.length) == 'progress') {
                const progress_event = new ValueUpdatedEvent('progress', data.old_value, progress);
                toasty.dispatchEvent(progress_event);
            }
            if (progress >= finishat) {
                const finished_event = new CustomEvent('completed');
                toasty.dispatchEvent(finished_event);
            }
        }
    }
}

export class JToastyEvent<T> extends CustomEvent<T> {
    constructor(name:string, detail:T = null) {
        super(name, { detail })
    }
}

export class JToastyMetadataSetEvent<T> extends JToastyEvent<{ key:string, value:T, old_value?:T }> {
    constructor(key:string, value:T, old_value:T) {
        super('metadata-set', { key, value, old_value })
    }
}

export class ValueUpdatedEvent<T> extends JToastyEvent<{ old_value:T, new_value:T, property:string }> {
    constructor(property_name:string, old_value:T, new_value:T) {
        super(property_name + '-updated', { old_value, new_value, property: property_name });
    }
}

export type JToastyMetadataSetEventListener = (event:JToastyMetadataSetEvent<unknown>) => any;

export type ValueUpdatedEventListner<T = unknown> = (event:ValueUpdatedEvent<T>) => any;
