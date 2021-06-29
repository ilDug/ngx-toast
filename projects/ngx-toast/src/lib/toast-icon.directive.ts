import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { DToast } from './toast';

@Directive({
    selector: '[toastIcon]'
})
export class ToastIconDirective implements OnChanges {

    @Input('toastIcon') toast: DToast;


    @HostBinding('class.fa-info') info: boolean
    @HostBinding('class.fa-exclamation-triangle') warning: boolean
    @HostBinding('class.fa-skull-crossbones') error: boolean


    ngOnChanges() {
        if (!this.toast) return;

        const { type } = this.toast
        this.info = type === 'info';
        this.error = type === 'error';
        this.warning = type === 'warning';
    }

}
