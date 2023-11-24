import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { DToast } from './toast';

@Directive({
    selector: '[toastColor]',
    standalone: true
})
export class ToastColorDirective implements OnChanges {

    @Input('toastColor') toast: DToast;

    @HostBinding('class.text-info') info: boolean
    @HostBinding('class.text-warning') warning: boolean
    @HostBinding('class.text-danger') error: boolean


    ngOnChanges() {
        if (!this.toast) return;

        const { type } = this.toast
        this.info = type === 'info';
        this.error = type === 'error';
        this.warning = type === 'warning';
    }

}
