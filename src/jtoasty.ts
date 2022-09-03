
export class JToasty extends EventTarget {
    protected base_div:HTMLDivElement;
    protected text_div:HTMLDivElement;

    protected lines:string[];

    private meta_data:Map<string, any>

    constructor(parent:HTMLElement, ...lines:string[]) {
        super();
        this._create_base_div();
        this.text_div = document.createElement('div');
        this.text_div
        this.texts = lines;
        parent.appendChild(this.base_div);
    }

    private _create_base_div() {
        const div = document.createElement('div');
        div.classList.add('jtoasted');
        this.base_div = div;
    }

    private _create_data_line_p(text:string) {
        const element = document.createElement('p');
        element.classList.add('jtoasted-data');
        element.textContent = text;
        this.text_div.appendChild(element);
    }

    set texts(value:string[]) {
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

    get texts() {
        return this.lines.slice();
    }

    set_meta_data<T>(key:string, value:T) {
        const old_value:T = this.meta_data.get(key);
        this.meta_data.set(key, value);
        const ev = new JToastyMetadataSetEvent<T>(key, value, old_value)
        this.dispatchEvent(ev);
    }

    get_meta_data<T = any>(key:string):T {
        return this.meta_data.get(key) as T;
    }

    on(eventName:'JToasty.metadata-set', callback:JToastyMetadataSetEventListener):void;
    on(eventName:string, callback:EventListenerOrEventListenerObject, options?:AddEventListenerOptions|boolean):void {
        this.addEventListener(eventName, callback, options);
    }
    off(eventName:string, callback:EventListenerOrEventListenerObject, options?:AddEventListenerOptions|boolean):void {
        this.removeEventListener(eventName, callback, options);
    }
}

export class JToastyEvent<T> extends CustomEvent<T> {
    constructor(name:string, detail:T = null) {
        super('JToasty.' + name, { detail })
    }
}

export class JToastyMetadataSetEvent<T> extends JToastyEvent<{ key:string, value:T, old_value?:T }> {
    constructor(key:string, value:T, old_value:T) {
        super('metadata-set', { key, value, old_value })
    }
}
export type JToastyMetadataSetEventListener = (event:JToastyMetadataSetEvent<unknown>) => any;
