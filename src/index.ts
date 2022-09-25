import { JToasty, JToastyProgess, ToastyProgessSettings } from './jtoasty';
import './style.css';

type ProgressToastyInformation = {
	progress: number;
	finishat?: number;
	apercent?: boolean;
};

export enum TOASTY_POSITION {
	BOTTOM_RIGHT,
	BOTTOM_LEFT,
	TOP_LEFT,
	TOP_RIGHT
}

export class JToastyToaster extends EventTarget {
	private parent: HTMLElement;
	protected positioning: {
		sidesTo: TOASTY_POSITION,
		cssClass:string,
		changeTo: (side:TOASTY_POSITION) => void;
	};
	protected toasted_div: HTMLDivElement;

	constructor();
	constructor(parent: HTMLElement);
	constructor(position: TOASTY_POSITION);
	constructor(parent: HTMLElement, position: TOASTY_POSITION);
	constructor(a?:unknown, b?:unknown) {
		super();
		let parent:object = document.body;
		let position = TOASTY_POSITION.BOTTOM_RIGHT;
		if (typeof a == 'object') {
			parent = a;
			if (typeof b == 'number') {
				position = b;
			}
		} else if (typeof a == 'number') {
			position = a;
			if (typeof b == 'object') {
				parent = b;
			}
		}
		if (!(parent instanceof HTMLElement)) {
			throw new TypeError('Passed parent must be an HTMLElement instance');
		}

		this.parent = parent;
		this.toasted_div = document.createElement('div');
		this.toasted_div.classList.add('jtoasteds-container');
		const positioning = {
			sidesTo: position,
			changeTo: (side: TOASTY_POSITION) => {
				this.positioning.sidesTo = side;
				this.toasted_div.classList.remove(this.positioning.cssClass);
				this.cssSideToClass();
				return; 
			},
			cssClass: 'bottom-right',
		};
		switch (position) {
		case TOASTY_POSITION.BOTTOM_LEFT:
		case TOASTY_POSITION.TOP_LEFT:
		case TOASTY_POSITION.TOP_RIGHT:
			break;
			
		default:
			positioning.sidesTo = TOASTY_POSITION.BOTTOM_RIGHT;
			break;
		}
		this.positioning = positioning;
		this.cssSideToClass();
		this.parent.appendChild(this.toasted_div);
	}

	protected cssSideToClass() {
		switch (this.positioning.sidesTo) {
		case TOASTY_POSITION.BOTTOM_LEFT:
			this.positioning.cssClass = 'bottom-left';
			break;
					
		case TOASTY_POSITION.TOP_LEFT:
			this.positioning.cssClass = 'top-left';
			break;
						
		case TOASTY_POSITION.TOP_RIGHT:
			this.positioning.cssClass = 'top-right';
			break;
					
		case TOASTY_POSITION.BOTTOM_RIGHT:
			this.positioning.cssClass = 'bottom-right';
			break;
		
		default:
			return;
		}

		this.toasted_div.classList.add(this.positioning.cssClass);
	}

	public sideTo(position: TOASTY_POSITION) {
		if (position < 0 || position > 3) {
			return;
		}
		this.positioning.changeTo(position);
	}

	public createNotification(...lines: string[]): JToasty;
	public createNotification(lifetime: number, ...lines: string[]): JToasty;
	public createNotification(a: unknown, ...lines: string[]): JToasty {
		let lifetime = 5;
		if (typeof a == 'string') {
			lines.unshift(a);
		} else if (Number.isSafeInteger(a)) {
			lifetime = a as number;
		}
		const toasty = new JToasty(this.toasted_div, lifetime, ...lines);
		toasty.on('metadata-set', (ev) => {
			this.dispatchEvent(new CustomEvent('jtoasty.metadata-set', { detail: { data: ev.detail, toasty } }));
		});
		return toasty;
	}

	public notification(...lines: string[]): JToasty;
	public notification(lifetimeOrElement: number | JToasty, ...lines: string[]): JToasty;
	public notification(element: JToasty, lifetime: number, ...lines: string[]): JToasty;
	public notification(a: unknown, b: unknown, ...lines: string[]): JToasty {
		if (a instanceof JToasty) {
			if (typeof b == 'number') {
				a.set_texts(lines);
				a.set_lifetime(b);
			} else if (typeof b == 'string') {
				lines.unshift(b);
			}
			a.set_texts(lines);
			return a;
		}
		if (typeof a == 'number') {
			if (typeof b == 'string') {
				lines.unshift(b);
			}
			return this.createNotification(a, ...lines);
		}
		if (typeof a == 'string') {
			lines.unshift(a);
		}
		if (typeof b == 'string') {
			lines.unshift(b);
		}
		return this.createNotification(...lines);
	}

	public progressNotification(data: ProgressToastyInformation): JToastyProgess;
	public progressNotification(toasty: JToastyProgess, data: ProgressToastyInformation): JToastyProgess;
	public progressNotification(data: ProgressToastyInformation, prefixing_line: string): JToastyProgess;
	public progressNotification(
		toasty: JToastyProgess,
		data: ProgressToastyInformation,
		prefixing_line: string,
	): JToastyProgess;
	public progressNotification(a: unknown, b?: unknown, c?: unknown): JToastyProgess {
		if (a instanceof JToastyProgess) {
			const data = b as ProgressToastyInformation;
			// Progress exists on this toasty so we just update the values
			if (typeof c == 'string') {
				const texts = a.get_texts();
				if (texts.length == 1) {
					texts.unshift(c);
				} else {
					texts[0] = c;
				}
				a.set_texts(texts);
			}

			if (typeof data.progress == 'number') {
				a.set_progress(data.progress);
			}
			if (typeof data.finishat == 'number') {
				a.finish_at(data.finishat);
			}
			if (typeof data.apercent == 'boolean') {
				a.use_percentage(data.apercent);
			}

			return a;
		}
		const data = Object.assign({ finishat: 100, lifetime: 5, progress: 0, apercent: false, prefixing: b as string }, a);
		const toasty = new JToastyProgess(this.toasted_div, data as ToastyProgessSettings);

		return toasty;
	}
}
