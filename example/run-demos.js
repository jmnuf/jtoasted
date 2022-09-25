
(function DEMOS() {
	const JToasted = window.JToasted;
	console.log(JToasted);
	const toaster = new JToasted.JToastyToaster(document.body);
	const sleep = (ms=500) => new Promise(res => setTimeout(res, ms));

	// First Demo
	// Toasty has a message that gets changed some time later to then self-destruct in 5s
	(function DEMO1() {
		const changeat = 10;
		const finishat = 10;
		let intervalId;
		const toasty = toaster.notification(-1, 'Hello everyone,', `this text will change after ${changeat} seconds`);

		setTimeout(() => {
			toasty.set_texts([
				'Hello world!',
				'I hope you know that I am',
				'VERY special, mama told me!',
				`Self-destructing in ${finishat} seconds`,
			]);
			toasty.set_lifetime(finishat);
			let timer = 0;
			intervalId = setInterval(
				() => {
					if (!toasty.alive) {
						if (intervalId != null) {
							clearInterval(intervalId);
							intervalId = null;
						}
						return;
					}
					timer++;
					const last_text_id = toasty.get_texts().length - 1;
					toasty.set_text_at(last_text_id, `Message self-destructing in ${finishat - timer} seconds`);
				},
				1000
			);
		}, changeat * 1000);
	})();

	// Second demo
	// Toasty has a progress to complete and then disappears some time after it finishes
	(function DEMO2() {
		let intervalId;
		const finishat = 60;
		const toasty = toaster.progressNotification({ progress: 0, finishat }, `I'm counting to ${finishat} seconds!`);
		toasty.once('completed', (ev) => {
			const t = ev.target;
			t.set_text_at(0, 'Will disappear in 5 seconds');
			if (intervalId != null) {
				clearInterval(intervalId);
				intervalId = null;
			}
		});
		intervalId = setInterval(() => {
			const progress = toasty.get_progress();
			toasty.set_progress(progress + 1);
		}, 1000);
	})();

	// Third demo
	// User can create a custom toasty to show their own custom message
	(function DEMO3() {
		/**
		 * @type {HTMLTextAreaElement}
		 */
		const areainput = document.getElementById('messagearea');
		/**
		 * @type {HTMLInputElement}
		 */
		const lifeinput = document.getElementById('lifetimeinput');
		const submitbtn = document.getElementById('notif-btn');

		submitbtn.addEventListener('click', () => {
			const text = areainput.value;
			if (!text.length) {
				return;
			}
			let life = Number(lifeinput.value);
			const lines = text.split('\n');
			for (let i = lines.length - 1; i >= 0; i--) {
				const line = lines[i].trim();
				if (!line.length) {
					lines.splice(i, 1);
				}
			}
			if (lines.length == 0) {
				return;
			}
			if (life == 0) {
				life = undefined;
			}

			toaster.createNotification(life, ...lines);
		});
	})();

	// Fourth demo
	// Move toaster around the screen
	(async function DEMO4() {
		const sidingInput = document.querySelector('#siding');
		const timeout = 2100;
		const POS = JToasted.TOASTY_POSITION;
		for (let i = 0; i < 4; i++) {
			const option = document.createElement('option');
			option.text = POS[i];
			option.value = i;
			sidingInput.appendChild(option);
		}
		await sleep(timeout);

		sidingInput.value = POS.BOTTOM_LEFT;
		toaster.sideTo(POS.BOTTOM_LEFT);
		await sleep(timeout);

		sidingInput.value = POS.TOP_LEFT;
		toaster.sideTo(POS.TOP_LEFT);
		await sleep(timeout);

		sidingInput.value = POS.TOP_RIGHT;
		toaster.sideTo(POS.TOP_RIGHT);
		await sleep(timeout);

		sidingInput.value = POS.BOTTOM_RIGHT;
		toaster.sideTo(POS.BOTTOM_RIGHT);

		sidingInput.disabled = false;
		sidingInput.addEventListener('change', () => {
			const pos = Number(sidingInput.value);
			toaster.sideTo(pos);
		});
	})();
})();
