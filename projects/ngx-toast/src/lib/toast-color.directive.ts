import { Directive, HostBinding, Input, input } from '@angular/core';
import { DToast } from './toast';

@Directive({
  selector: '[toastColor]',
  standalone: true
})
export class ToastColorDirective {

  @Input('toastColor') toast: DToast;
  // toast = input<DToast>(undefined, { alias: 'toastColor' });

  @HostBinding('class.t-main') get info():boolean{ return this.toast.type === "INFO"}
  @HostBinding('class.t-warn') get warning():boolean{ return this.toast.type === "WARNING"}
  @HostBinding('class.t-error') get error():boolean{ return this.toast.type === "ERROR"}

}
