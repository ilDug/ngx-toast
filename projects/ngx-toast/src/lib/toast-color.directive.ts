import { Directive, HostBinding, Input, input } from '@angular/core';
import { DToast } from './toast';

@Directive({
    selector: '[toastColor]',
    standalone: true,
    host: {
        '[class.t-main]': 'toast().type === "INFO"',
        '[class.t-warn]': 'toast().type === "WARNING"',
        '[class.t-error]': 'toast().type === "ERROR"'
    }
})
export class ToastColorDirective {
    toast = input<DToast>(undefined, { alias: 'toastColor' });
}
