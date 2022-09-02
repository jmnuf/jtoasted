import './style.css';

type JToasty = HTMLElement;
type ProgressToastyInformation =  {
    active:number,
    totals:number,
    asPercentage?:boolean,
};

export class JToastyToaster {
    private parent:HTMLElement

    constructor(parent = document.body) {
        this.parent = parent;
    }

    public createNotification(...lines:string[]):JToasty {
        return null
    }

    public notification(...lines:string[]):JToasty;
    public notification(element:JToasty, ...lines:string[]):JToasty;
    public notification(element:unknown, ...lines:string[]):JToasty {
        return null;
    }

    public progressNotification(data:ProgressToastyInformation, prefixing_line:string):JToasty {
        return null;
    }
}
