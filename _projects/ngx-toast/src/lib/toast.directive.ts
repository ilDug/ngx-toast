import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, OnInit, ViewContainerRef } from '@angular/core';
import { ToastComponent } from './toast/toast.component';

@Directive({
  selector: '[dagToast]'
})
export class ToastDirective implements OnInit {

    constructor(
        private vcr: ViewContainerRef,
        // private cfr: ComponentFactoryResolver
    ) { }


    ngOnInit() {
        this.load()
    }


    load() {
        // let cf: ComponentFactory<ToastComponent> = this.cfr.resolveComponentFactory(ToastComponent)
        // let cr: ComponentRef<ToastComponent> = this.vcr.createComponent(cf)
        let cr: ComponentRef<ToastComponent> = this.vcr.createComponent(ToastComponent)
    }
}
