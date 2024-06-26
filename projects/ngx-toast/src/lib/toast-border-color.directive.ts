import { Directive, computed, input } from '@angular/core';
import { DToast } from './toast';

@Directive({
    selector: '[toastBorderColor]',
    standalone: true,
    host: {
        '[style.border-color]': 'cssVar()'
    }
})
export class ToastBorderColorDirective {
    toast = input<DToast>(undefined, { alias: 'toastBorderColor' });


    cssVar = computed(() => {
        if (this.toast().type === 'INFO')
            return 'var(--c-main)';
        if (this.toast().type === 'WARNING')
            return 'var(--c-warn)';
        if (this.toast().type === 'ERROR')
            return 'var(--c-error)';
    });
}
