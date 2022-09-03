import { JToastyToaster } from ".";

export function run_demo() {
    const toaster = new JToastyToaster();
    const toasty1 = toaster.notification('Hello', 'World');
    setTimeout(() => {
        toasty1.texts[1] = 'Everyone!'
    }, 5000);
}

