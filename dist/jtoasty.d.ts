export declare class JToasty extends EventTarget {
    protected base_div: HTMLDivElement;
    protected text_div: HTMLDivElement;
    protected exit_btn: HTMLButtonElement;
    protected lines: string[];
    protected meta_data: Map<string, unknown>;
    protected life: number;
    protected life_timeout_id: unknown;
    constructor(parent: HTMLElement, life: number, ...lines: string[]);
    private _create_base_html;
    private _create_base_div;
    private _create_text_div;
    private _create_exit_button;
    private _create_data_line_p;
    set_lifetime(lifetime: number): void;
    remove(): boolean;
    get alive(): boolean;
    set_texts(value: string[]): void;
    /**
     * Set the text of a line in the notification
     *
     * @param index index of text line
     * @param value text to set at position
     * @returns whether the index was a valid index and the line was added
     */
    set_text_at(index: number, value: string): boolean;
    get_texts(): string[];
    has_metadata(key: string): boolean;
    set_metadata<T>(key: string, value: T): void;
    get_metadata<T = unknown>(key: string): T;
    on(eventName: 'metadata-set', callback: JToastyMetadataSetEventListener, options?: AddEventListenerOptions | boolean): void;
    on(eventName: 'removing', callback: ToastySimpleEventListener, options?: AddEventListenerOptions | boolean): void;
    on(eventName: string, callback: EventListenerOrEventListenerObject, options?: AddEventListenerOptions | boolean): void;
    once(eventName: 'metadata-set', callback: JToastyMetadataSetEventListener, options?: AddEventListenerOptions | boolean): void;
    once(eventName: 'removing', callback: ToastySimpleEventListener, options?: AddEventListenerOptions | boolean): void;
    once(eventName: string, callback: EventListenerOrEventListenerObject, options?: AddEventListenerOptions | boolean): void;
    off(eventName: string, callback: EventListenerOrEventListenerObject, options?: AddEventListenerOptions | boolean): void;
    protected fireEvent(eventName: string, eventInit?: CustomEventInit): boolean;
}
export declare type ToastyProgessSettings = {
    progress: number;
    finishat: number;
    lifetime: number;
    apercent: boolean;
    prefixing?: string;
};
declare type PROGRESSION_PREFIX = 'PROGRESS.';
export declare class JToastyProgess extends JToasty {
    private _on_completed_callback;
    protected progress_div: HTMLDivElement;
    protected progression_div: HTMLDivElement;
    constructor(parent: HTMLElement, data: ToastyProgessSettings);
    private _create_progress_bar;
    get is_complete(): boolean;
    set_lifetime(lifetime: number): void;
    set_progress(progress: number): void;
    get_progress(): number;
    get_percentage(): number;
    finish_at(value: number): void;
    finish_at(): number;
    use_percentage(value: boolean): void;
    use_percentage(): boolean;
    on(event: 'metadata-set', callback: JToastyMetadataSetEventListener<JToastyProgess>, options?: AddEventListenerOptions | boolean): void;
    on(event: 'progress-updated' | 'finishat-updated', callback: ValueUpdatedEventListner<number, JToastyProgess>, options?: AddEventListenerOptions | boolean): void;
    on(event: 'completed', callback: JToastyProgessCompleteEventListener, options?: AddEventListenerOptions | boolean): void;
    on(event: 'removing', callback: ToastySimpleEventListener<JToastyProgess>, options?: AddEventListenerOptions | boolean): void;
    on(eventName: string, callback: EventListenerOrEventListenerObject, options?: AddEventListenerOptions | boolean): void;
    once(event: 'metadata-set', callback: JToastyMetadataSetEventListener<JToastyProgess>, options?: AddEventListenerOptions | boolean): void;
    once(event: 'progress-updated' | 'finishat-updated', callback: ValueUpdatedEventListner<number, JToastyProgess>, options?: AddEventListenerOptions | boolean): void;
    once(event: 'completed', callback: JToastyProgessCompleteEventListener, options?: AddEventListenerOptions | boolean): void;
    once(event: 'removing', callback: ToastySimpleEventListener<JToastyProgess>, options?: AddEventListenerOptions | boolean): void;
    once(eventName: string, callback: EventListenerOrEventListenerObject, options?: AddEventListenerOptions | boolean): void;
    static get PROGRESS_METADATA_PREFIX(): PROGRESSION_PREFIX;
    static get PROGRESS_METADATA_LISTENER(): (ev: JToastyMetadataSetEvent<unknown>) => void;
    protected static get PROGRESS_METADATA_PROGRESS_KEY(): string;
    protected static get PROGRESS_METADATA_FINISH_AT_KEY(): string;
    protected static get PROGRESS_METADATA_PERCENT_KEY(): string;
}
declare type PROGRESS_DATA_KEYS = `${PROGRESSION_PREFIX}progress` | `${PROGRESSION_PREFIX}finish_at` | `${PROGRESSION_PREFIX}as_percent`;
declare type PROGRESSION_KEYS = `${PROGRESSION_PREFIX}progress` | `${PROGRESSION_PREFIX}finish_at`;
export declare class JToastyEvent<T, J extends JToasty = JToasty> extends CustomEvent<T> {
    target: J;
    constructor(name: string, init: CustomEventInit<T>);
}
declare type JToastyProgessCompleteEvent<J extends JToastyProgess = JToastyProgess> = JToastyEvent<{
    from: string;
    old_value: number;
    new_value: number;
}, J>;
declare type JToastyProgessCompleteEventListener<J extends JToastyProgess = JToastyProgess> = (event: JToastyProgessCompleteEvent<J>) => void;
export declare class JToastySimpleEvent<T = unknown, J extends JToasty = JToasty> extends JToastyEvent<T, J> {
    constructor(name: string, detail: T);
}
export declare type ToastySimpleEventListener<J extends JToasty = JToasty> = (event: JToastySimpleEvent<unknown, J>) => void;
export declare class JToastyMetadataSetEvent<T = unknown, J extends JToasty = JToasty> extends JToastySimpleEvent<{
    key: string;
    value: T;
    old_value?: T;
}, J> {
    constructor(key: string, value: T, old_value: T);
}
export declare type JToastyProgressDataUpdatedEvent = JToastyMetadataSetEvent<{
    key: PROGRESS_DATA_KEYS;
    value: number | boolean;
    old_value: number | boolean;
}, JToastyProgess>;
export declare type JToastyProgressionEvent = JToastyMetadataSetEvent<{
    key: PROGRESSION_KEYS;
    value: number;
    old_value: number;
}, JToastyProgess>;
export declare class ValueUpdatedEvent<T, J extends JToasty = JToasty> extends JToastySimpleEvent<{
    old_value: T;
    new_value: T;
    property: string;
}, J> {
    old_value: T;
    new_value: T;
    property: string;
    constructor(property_name: string, old_value: T, new_value: T);
}
export declare type JToastyMetadataSetEventListener<J extends JToasty = JToasty> = (event: JToastyMetadataSetEvent<unknown, J>) => void;
export declare type ValueUpdatedEventListner<T = unknown, J extends JToasty = JToasty> = (event: ValueUpdatedEvent<T, J>) => void;
export {};
