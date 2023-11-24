import { Directive, HostBinding, Input } from '@angular/core';
import { DToast } from './toast';

@Directive({
  selector: '[toastColor]',
  standalone: true
})
export class ToastColorDirective {

  @Input('toastColor') toast: DToast;

  @HostBinding('class.text-info') get info(): boolean { return this.toast ? this.toast.type === 'info' : false }
  @HostBinding('class.text-warning') get warning(): boolean { return this.toast ? this.toast.type === 'warning' : false }
  @HostBinding('class.text-danger') get error(): boolean { return this.toast ? this.toast.type === 'error' : false }

}
