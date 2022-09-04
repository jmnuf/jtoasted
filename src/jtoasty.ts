export class JToasty extends EventTarget {
	protected base_div: HTMLDivElement;
	protected text_div: HTMLDivElement;
	protected exit_btn: HTMLButtonElement;

	protected lines: string[];

	protected meta_data: Map<string, unknown>;

	protected life: number;
	protected life_timeout_id: unknown;

	constructor(parent: HTMLElement, life: number, ...lines: string[]) {
		super();
		this.meta_data = new Map();
		this._create_base_html(parent);
		this.set_texts(lines);
		parent.appendChild(this.base_div);
		this.set_lifetime(life);
	}

	private _create_base_html(parent: HTMLElement) {
		this._create_base_div(parent);
		this._create_exit_button();
		this._create_text_div();
	}

	private _create_base_div(parent: HTMLElement) {
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
			const to_remove_event = new CustomEvent('user-remove', { cancelable: true, detail: { toasty: this } });
			if (!this.dispatchEvent(to_remove_event)) {
				return;
			}
			div.remove();
		});
		btn.innerHTML = '&cross;';
		div.appendChild(btn);
		this.exit_btn = btn;
	}

	private _create_data_line_p(text: string) {
		const element = document.createElement('p');
		element.classList.add('jtoasted-data');
		element.textContent = text;
		this.text_div.appendChild(element);
	}

	public set_lifetime(lifetime: number): void {
		if (this.life_timeout_id != null) {
			clearTimeout(this.life_timeout_id as number);
			this.life_timeout_id = null;
		}
		this.life = lifetime;
		if (lifetime == -1) {
			return;
		}
		this.life_timeout_id = setTimeout(() => {
			this.life_timeout_id = null;
			this.remove();
		}, this.life * 1000);
	}

	remove() {
		if (!this.alive) {
			return false;
		}
		if (this.fireEvent('removing', { cancelable: true })) {
			this.set_lifetime(this.life);
			return false;
		}
		this.base_div?.remove();
		this.base_div = null;
		return true;
	}

	get alive() {
		if (this.base_div == null) {
			return false;
		}
		const parent = this.base_div.parentElement;
		return parent != null;
	}

	set_texts(value: string[]) {
		if (this.lines) {
			const kids = this.text_div.children;
			const minI = Math.min(value.length, kids.length);
			for (let i = 0; i < minI; i++) {
				const element = kids[i];
				element.textContent = value[i];
			}
			if (kids.length > minI) {
				for (let i = minI; i < kids.length; i++) {
					kids[i].remove();
				}
			} else if (value.length > minI) {
				for (let i = minI; i < value.length; i++) {
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
	set_text_at(index: number, value: string): boolean {
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

	has_metadata(key: string): boolean {
		return this.meta_data.has(key);
	}

	set_metadata<T>(key: string, value: T) {
		const old_value: T = this.meta_data.get(key) as T;
		this.meta_data.set(key, value);
		const ev = new JToastyMetadataSetEvent<T>(key, value, old_value);
		this.dispatchEvent(ev);
	}

	get_metadata<T = unknown>(key: string): T {
		return this.meta_data.get(key) as T;
	}

	on(
		eventName: 'metadata-set',
		callback: JToastyMetadataSetEventListener,
		options?: AddEventListenerOptions | boolean,
	): void;
	on(eventName: 'removing', callback: ToastySimpleEventListener, options?: AddEventListenerOptions | boolean): void;
	on(
		eventName: string,
		callback: EventListenerOrEventListenerObject,
		options?: AddEventListenerOptions | boolean,
	): void;
	on(
		eventName: string,
		callback: EventListenerOrEventListenerObject,
		options?: AddEventListenerOptions | boolean,
	): void {
		const cfg = options ? options : {};
		this.addEventListener(eventName, callback, cfg);
	}

	once(
		eventName: 'metadata-set',
		callback: JToastyMetadataSetEventListener,
		options?: AddEventListenerOptions | boolean,
	): void;
	once(eventName: 'removing', callback: ToastySimpleEventListener, options?: AddEventListenerOptions | boolean): void;
	once(
		eventName: string,
		callback: EventListenerOrEventListenerObject,
		options?: AddEventListenerOptions | boolean,
	): void;
	once(
		eventName: string,
		callback: EventListenerOrEventListenerObject,
		options?: AddEventListenerOptions | boolean,
	): void {
		const cfg = options ? Object.assign({}, options, { once: true }) : { once: true };
		this.addEventListener(eventName, callback, cfg);
	}

	off(
		eventName: string,
		callback: EventListenerOrEventListenerObject,
		options?: AddEventListenerOptions | boolean,
	): void {
		this.removeEventListener(eventName, callback, options);
	}

	protected fireEvent(eventName: string, eventInit?: CustomEventInit) {
		const event = eventInit ? new CustomEvent(eventName, eventInit) : new CustomEvent(eventName);
		return !this.dispatchEvent(event);
	}
}

export type ToastyProgessSettings = {
	progress: number;
	finishat: number;
	lifetime: number;
	apercent: boolean;
	prefixing?: string;
};

function is_progress_data_change_event(
	event: JToastyMetadataSetEvent<unknown>,
): event is JToastyProgressDataUpdatedEvent {
	return event.detail.key.startsWith(JToastyProgess.PROGRESS_METADATA_PREFIX);
}

type PROGRESSION_PREFIX = 'PROGRESS.';

export class JToastyProgess extends JToasty {
	private _on_completed_callback: JToastyEventListener;

	constructor(parent: HTMLElement, data: ToastyProgessSettings) {
		const { progress, finishat, apercent, lifetime, prefixing } = data;
		if (typeof prefixing == 'string') {
			super(parent, -1, prefixing, '');
		} else {
			super(parent, -1);
		}
		this.on('metadata-set', JToastyProgess.PROGRESS_METADATA_LISTENER);
		this.meta_data.set(JToastyProgess.PROGRESS_METADATA_PROGRESS_KEY, progress);
		this.meta_data.set(JToastyProgess.PROGRESS_METADATA_FINISH_AT_KEY, finishat);
		this.set_metadata(JToastyProgess.PROGRESS_METADATA_PERCENT_KEY, apercent);
		this._on_completed_callback = () => {
			this.set_lifetime(lifetime);
		};
		this.once('completed', this._on_completed_callback);
	}

	get is_complete() {
		return this.get_progress() >= this.finish_at();
	}

	public set_lifetime(lifetime: number): void {
		if (!this.is_complete) {
			return;
		}
		super.set_lifetime(lifetime);
	}

	set_progress(progress: number) {
		this.set_metadata(JToastyProgess.PROGRESS_METADATA_PREFIX + 'progress', progress);
	}

	get_progress(): number {
		return this.get_metadata(JToastyProgess.PROGRESS_METADATA_PREFIX + 'progress');
	}

	finish_at(value: number): void;
	finish_at(): number;
	finish_at(value?: unknown): unknown {
		const key = JToastyProgess.PROGRESS_METADATA_PREFIX + 'finish_at';
		if (typeof value != 'number') {
			return this.get_metadata(key);
		}
		this.set_metadata(key, value);
	}

	use_percentage(value: boolean): void;
	use_percentage(): boolean;
	use_percentage(value?: unknown): unknown {
		if (typeof value != 'boolean') {
			return this.get_metadata(JToastyProgess.PROGRESS_METADATA_PERCENT_KEY);
		}
		this.set_metadata(JToastyProgess.PROGRESS_METADATA_PERCENT_KEY, value);
	}

	on(
		event: 'metadata-set',
		callback: JToastyMetadataSetEventListener<JToastyProgess>,
		options?: AddEventListenerOptions | boolean,
	): void;
	on(
		event: 'progress-updated' | 'finishat-updated',
		callback: ValueUpdatedEventListner<number, JToastyProgess>,
		options?: AddEventListenerOptions | boolean,
	): void;
	on(
		event: 'completed',
		callback: JToastyProgessCompleteEventListener,
		options?: AddEventListenerOptions | boolean,
	): void;
	on(
		event: 'removing',
		callback: ToastySimpleEventListener<JToastyProgess>,
		options?: AddEventListenerOptions | boolean,
	): void;
	on(
		eventName: string,
		callback: EventListenerOrEventListenerObject,
		options?: AddEventListenerOptions | boolean,
	): void;
	on(
		eventName: string,
		callback: EventListenerOrEventListenerObject,
		options?: AddEventListenerOptions | boolean,
	): void {
		super.on(eventName, callback, options);
	}

	once(
		event: 'metadata-set',
		callback: JToastyMetadataSetEventListener<JToastyProgess>,
		options?: AddEventListenerOptions | boolean,
	): void;
	once(
		event: 'progress-updated' | 'finishat-updated',
		callback: ValueUpdatedEventListner<number, JToastyProgess>,
		options?: AddEventListenerOptions | boolean,
	): void;
	once(
		event: 'completed',
		callback: JToastyProgessCompleteEventListener,
		options?: AddEventListenerOptions | boolean,
	): void;
	once(
		event: 'removing',
		callback: ToastySimpleEventListener<JToastyProgess>,
		options?: AddEventListenerOptions | boolean,
	): void;
	once(
		eventName: string,
		callback: EventListenerOrEventListenerObject,
		options?: AddEventListenerOptions | boolean,
	): void;
	once(
		eventName: string,
		callback: EventListenerOrEventListenerObject,
		options?: AddEventListenerOptions | boolean,
	): void {
		super.once(eventName, callback, options);
	}

	static get PROGRESS_METADATA_PREFIX(): PROGRESSION_PREFIX {
		return 'PROGRESS.';
	}

	static get PROGRESS_METADATA_LISTENER() {
		const PROGRESS_METADATA_PREFIX = JToastyProgess.PROGRESS_METADATA_PREFIX;
		return (ev: JToastyMetadataSetEvent<unknown>) => {
			const data = ev.detail;
			if (!is_progress_data_change_event(ev)) {
				return;
			}
			const toasty = ev.target;
			const texts = toasty.get_texts();
			let index = texts.length - 1;
			if (texts.length == 0) {
				texts.length = 1;
				index = 0;
			}
			const progress: number = toasty.get_metadata(PROGRESS_METADATA_PREFIX + 'progress');
			const finishat: number = toasty.get_metadata(PROGRESS_METADATA_PREFIX + 'finish_at');
			const percents: boolean = toasty.get_metadata(PROGRESS_METADATA_PREFIX + 'as_percent');
			const prefixx = progress >= finishat ? 'Completed - ' : 'Processing - ';
			const progmsg = percents ? `${((progress / finishat) * 100).toFixed(2)}%` : `${progress} / ${finishat}`;
			toasty.set_text_at(index, `${prefixx}${progmsg}`);
			if (data.key == JToastyProgess.PROGRESS_METADATA_PERCENT_KEY) {
				return;
			}
			const property = data.key.substring(JToastyProgess.PROGRESS_METADATA_PREFIX.length);
			const progress_event = new ValueUpdatedEvent(property, data.old_value, data.value);
			toasty.dispatchEvent(progress_event);
			if (progress >= finishat) {
				toasty.fireEvent('completed', { detail: { from: property, old_value: data.old_value, new_value: data.value } });
			}
		};
	}

	protected static get PROGRESS_METADATA_PROGRESS_KEY() {
		return this.PROGRESS_METADATA_PREFIX + 'progress';
	}

	protected static get PROGRESS_METADATA_FINISH_AT_KEY() {
		return this.PROGRESS_METADATA_PREFIX + 'finish_at';
	}

	protected static get PROGRESS_METADATA_PERCENT_KEY() {
		return this.PROGRESS_METADATA_PREFIX + 'as_percent';
	}
}

type PROGRESS_DATA_KEYS =
	| `${PROGRESSION_PREFIX}progress`
	| `${PROGRESSION_PREFIX}finish_at`
	| `${PROGRESSION_PREFIX}as_percent`;
type PROGRESSION_KEYS = `${PROGRESSION_PREFIX}progress` | `${PROGRESSION_PREFIX}finish_at`;

export class JToastyEvent<T, J extends JToasty = JToasty> extends CustomEvent<T> {
	target: J;
	constructor(name: string, init: CustomEventInit<T>) {
		super(name, init);
	}
}

type JToastyEventListener<T = unknown, J extends JToasty = JToasty> = (event: JToastyEvent<T, J>) => void;

type JToastyProgessCompleteEvent<J extends JToastyProgess = JToastyProgess> = JToastyEvent<
	{
		from: string;
		old_value: number;
		new_value: number;
	},
	J
>;

type JToastyProgessCompleteEventListener<J extends JToastyProgess = JToastyProgess> = (
	event: JToastyProgessCompleteEvent<J>,
) => void;

export class JToastySimpleEvent<T = unknown, J extends JToasty = JToasty> extends JToastyEvent<T, J> {
	constructor(name: string, detail: T) {
		super(name, { detail });
	}
}

export type ToastySimpleEventListener<J extends JToasty = JToasty> = (event: JToastySimpleEvent<unknown, J>) => void;

export class JToastyMetadataSetEvent<T = unknown, J extends JToasty = JToasty> extends JToastySimpleEvent<
	{ key: string; value: T; old_value?: T },
	J
> {
	constructor(key: string, value: T, old_value: T) {
		super('metadata-set', { key, value, old_value });
	}
}

export type JToastyProgressDataUpdatedEvent = JToastyMetadataSetEvent<
	{
		key: PROGRESS_DATA_KEYS;
		value: number | boolean;
		old_value: number | boolean;
	},
	JToastyProgess
>;

export type JToastyProgressionEvent = JToastyMetadataSetEvent<
	{
		key: PROGRESSION_KEYS;
		value: number;
		old_value: number;
	},
	JToastyProgess
>;

export class ValueUpdatedEvent<T, J extends JToasty = JToasty> extends JToastySimpleEvent<
	{ old_value: T; new_value: T; property: string },
	J
> {
	old_value: T;
	new_value: T;
	property: string;
	constructor(property_name: string, old_value: T, new_value: T) {
		super(property_name + '-updated', { old_value, new_value, property: property_name });
		this.property = property_name;
		this.old_value = old_value;
		this.new_value = new_value;
	}
}

export type JToastyMetadataSetEventListener<J extends JToasty = JToasty> = (
	event: JToastyMetadataSetEvent<unknown, J>,
) => void;

export type ValueUpdatedEventListner<T = unknown, J extends JToasty = JToasty> = (
	event: ValueUpdatedEvent<T, J>,
) => void;
