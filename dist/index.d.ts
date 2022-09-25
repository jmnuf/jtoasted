import { JToasty, JToastyProgess } from './jtoasty';
import './style.css';
declare type ProgressToastyInformation = {
    progress: number;
    finishat?: number;
    apercent?: boolean;
};
export declare enum TOASTY_POSITION {
    BOTTOM_RIGHT = 0,
    BOTTOM_LEFT = 1,
    TOP_LEFT = 2,
    TOP_RIGHT = 3
}
export declare class JToastyToaster extends EventTarget {
    private parent;
    protected positioning: {
        sidesTo: TOASTY_POSITION;
        cssClass: string;
        changeTo: (side: TOASTY_POSITION) => void;
    };
    protected toasted_div: HTMLDivElement;
    constructor();
    constructor(parent: HTMLElement);
    constructor(position: TOASTY_POSITION);
    constructor(parent: HTMLElement, position: TOASTY_POSITION);
    protected cssSideToClass(): void;
    sideTo(position: TOASTY_POSITION): void;
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
