import { Directive, HostBinding, Input } from '@angular/core';
import { DToast } from './toast';

@Directive({
  selector: '[toastColor]',
  standalone: true
})
export class ToastColorDirective {

  @Input('toastColor') toast: DToast;

  @HostBinding('class.t-main') get info(): boolean { return this.toast ? this.toast.type === 'info' : false }
  @HostBinding('class.t-warn') get warning(): boolean { return this.toast ? this.toast.type === 'warning' : false }
  @HostBinding('class.t-error') get error(): boolean { return this.toast ? this.toast.type === 'error' : false }

}
