import { ComponentRef, Directive, OnInit, ViewContainerRef, inject } from '@angular/core';
import { ToastContainerComponent } from './toast-container/toast-container.component';

@Directive({
    selector: '[dagToast]',
    standalone: true
})
export class ToastDirective implements OnInit {
    private vcr = inject(ViewContainerRef)

    ngOnInit() {
      const cr: ComponentRef<ToastContainerComponent> = this.vcr.createComponent(ToastContainerComponent)
    }
}
