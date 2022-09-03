import { JToastyToaster } from ".";
import { JToastyProgess } from "./jtoasty";

export function run_demo() {
    let intervalId:number;
    const toaster = new JToastyToaster();
    const toasty1 = toaster.notification('Hello everyone,', 'this text will change after 5 seconds');
    const toasty2:JToastyProgess = toaster.progressNotification({ progress: 0, finishat: 10 }, 'I\'m counting to 5 seconds!') as JToastyProgess;
    toasty2.on('completed', (ev) => {
        const t = ev.target as JToastyProgess;
        t.set_text_at(0, 'I am done counting!');
        if (intervalId != null) {
            clearInterval(intervalId);
        }
    });
    setTimeout(() => {
        toasty1.set_texts([
            'Hello world!',
            'I hope you know that I am',
            'VERY special, mama told me!'
        ]);
    }, 5000);
    intervalId = setInterval(() => {
        const progress = toasty2.get_progress();
        toasty2.set_progress(progress + 1);
    }, 1000) as unknown as number;
}

