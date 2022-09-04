
(function DEMOS() {
	const toaster = new window.JToasted.JToastyToaster(document.body);

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
			intervalId = setInterval(
				(startTime) => {
					if (!toasty.alive) {
						if (intervalId != null) {
							clearInterval(intervalId);
							intervalId = null;
						}
						return;
					}
					const time_past = Math.floor((Date.now() - startTime) / 1000);
					const last_text_id = toasty.get_texts().length - 1;
					toasty.set_text_at(last_text_id, `Message self-destructing in ${finishat - time_past} seconds`);
				},
				1000,
				Date.now(),
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

})();
