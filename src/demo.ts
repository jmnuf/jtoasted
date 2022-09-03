import { JToastyToaster } from ".";

export function run_demo() {
    const toaster = new JToastyToaster();
    const toasty1 = toaster.notification('Hello', 'World');
    setTimeout(() => {
        toasty1.set_text_at(1, 'Everyone!');
    }, 5000);
}

