import { JToasty, JToastyProgess } from './jtoasty';
import './style.css';
declare type ProgressToastyInformation = {
    progress: number;
    finishat?: number;
    apercent?: boolean;
};
export declare class JToastyToaster extends EventTarget {
    private parent;
    protected toasted_div: HTMLDivElement;
    constructor(parent?: HTMLElement);
    createNotification(...lines: string[]): JToasty;
    createNotification(lifetime: number, ...lines: string[]): JToasty;
    notification(...lines: string[]): JToasty;
    notification(lifetimeOrElement: number | JToasty, ...lines: string[]): JToasty;
    notification(element: JToasty, lifetime: number, ...lines: string[]): JToasty;
    progressNotification(data: ProgressToastyInformation): JToastyProgess;
    progressNotification(toasty: JToastyProgess, data: ProgressToastyInformation): JToastyProgess;
    progressNotification(data: ProgressToastyInformation, prefixing_line: string): JToastyProgess;
    progressNotification(toasty: JToastyProgess, data: ProgressToastyInformation, prefixing_line: string): JToastyProgess;
}
export {};
