import { run_demo } from './demo';
import { JToasty, JToastyProgess } from './jtoasty';
import './style.css';


type ProgressToastyInformation =  {
    progress:number,
    finishat?:number,
    apercent?:boolean,
};


export class JToastyToaster extends EventTarget {
    private parent:HTMLElement;
    protected toasted_div:HTMLDivElement;

    constructor(parent:HTMLElement = document.body) {
        super();
        if (!(parent instanceof HTMLElement)) {
            throw new TypeError('Passed parent must be an HTMLElement instance')
        }
        this.parent = parent;
        this.toasted_div = document.createElement('div');
        this.toasted_div.classList.add('jtoasteds-container');
        this.parent.appendChild(this.toasted_div);
    }

    public createNotification(...lines:string[]):JToasty {
        const toasty = new JToasty(this.toasted_div, ...lines);
        toasty.on('metadata-set', (ev) => {
            this.dispatchEvent(new CustomEvent('jtoasty.metadata-set', { detail: { data: ev.detail, toasty } }));
        })
        return toasty;
    }

    public notification(...lines:string[]):JToasty;
    public notification(element:JToasty, ...lines:string[]):JToasty;
    public notification(element:unknown, ...lines:string[]):JToasty {
        if (element instanceof JToasty) {
            element.set_texts(lines);
            return element;
        }
        if (typeof element == 'string') {
            const all_lines:string[] = [element].concat(lines);
            return this.createNotification(...all_lines);
        }
        return this.createNotification(...lines);
    }

    public progressNotification(data:ProgressToastyInformation):JToastyProgess;
    public progressNotification(toasty:JToasty, data:ProgressToastyInformation):JToasty;
    public progressNotification(data:ProgressToastyInformation, prefixing_line:string):JToastyProgess;
    public progressNotification(toasty:JToasty, data:ProgressToastyInformation, prefixing_line:string):JToasty;
    public progressNotification(a:unknown, b?:unknown, c?:unknown):JToasty {
        const PROGRESS_METADATA_PREFIX = JToastyProgess.PROGRESS_METADATA_PREFIX;
        
        if (a instanceof JToasty) {
            const data = b as ProgressToastyInformation;
            // Progress exists on this toasty so we just update the values
            if (a.has_metadata(PROGRESS_METADATA_PREFIX + 'progress')) {
                if (typeof c == 'string') {
                    const texts = a.get_texts();
                    if (texts.length == 1) {
                        texts.unshift(c);
                    } else {
                        texts[0] = c;
                    }
                    a.set_texts(texts);
                }

                a.set_metadata(PROGRESS_METADATA_PREFIX + 'progress', data.progress);
                if (typeof data.finishat == 'number') {
                    a.set_metadata(PROGRESS_METADATA_PREFIX + 'finish_at', data.finishat);
                }
                if (typeof data.apercent == 'boolean') {
                    a.set_metadata(PROGRESS_METADATA_PREFIX + 'as_percent', data.apercent);
                }
                return a;
            }

            a.set_metadata(PROGRESS_METADATA_PREFIX + 'progress', data.progress);
            a.set_metadata(PROGRESS_METADATA_PREFIX + 'finish_at', data.finishat);
            a.set_metadata(PROGRESS_METADATA_PREFIX + 'as_percent', Boolean(data.apercent));
            a.on('metadata-set', JToastyProgess.PROGRESS_METADATA_LISTENER);
            
            return a;
        }
        const data = Object.assign({ finishat: 100, progress: 0, apercent:false, prefixing:b as string }, a);
        console.log(data)
        const toasty = new JToastyProgess(this.toasted_div, data);
        
        return toasty;
    }
}

// Demo code
run_demo();
