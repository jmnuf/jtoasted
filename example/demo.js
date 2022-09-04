
export function run_demo() {
	const Toaster = window.JToasted.JToastyToaster;
	let intervalId1;
	let intervalId2;
	const toaster = new Toaster();
	const toasty1 = toaster.notification(-1, 'Hello everyone,', 'this text will change after 5 seconds');
	const toasty2 = toaster.progressNotification({ progress: 0, finishat: 10 }, 'I\'m counting to 10 seconds!');
	toasty2.once('completed', (ev) => {
		const t = ev.target;
		t.set_text_at(0, 'Will disappear in 5 seconds');
		if (intervalId1 != null) {
			clearInterval(intervalId1);
			intervalId1 = null;
		}
	});
	setTimeout(() => {
		toasty1.set_texts([
			'Hello world!',
			'I hope you know that I am',
			'VERY special, mama told me!',
			'Self-destructing in 5 seconds',
		]);
		toasty1.set_lifetime(5);
		intervalId2 = setInterval(
			(startTime) => {
				if (!toasty1.alive) {
					if (intervalId2 != null) {
						clearInterval(intervalId2);
						intervalId2 = null;
					}
					return;
				}
				const time_past = Math.floor((Date.now() - startTime) / 1000);
				const last_text_id = toasty1.get_texts().length - 1;
				toasty1.set_text_at(last_text_id, `Message self-destructing in ${5 - time_past} seconds`);
			},
			1000,
			Date.now(),
		);
	}, 5000);
	intervalId1 = setInterval(() => {
		const progress = toasty2.get_progress();
		toasty2.set_progress(progress + 1);
	}, 1000);
}
