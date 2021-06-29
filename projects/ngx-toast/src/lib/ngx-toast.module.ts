import { NgModule } from '@angular/core';
import { ToastComponent } from './toast/toast.component';
import { ToastItemComponent } from './toast-item/toast-item.component';
import { ToastContainerComponent } from './toast-container/toast-container.component';
import { ToastDirective } from './toast.directive';
import { CommonModule } from '@angular/common';
import { ToastColorDirective } from './toast-color.directive';
import { ToastIconDirective } from './toast-icon.directive';



@NgModule({
    declarations: [
        ToastComponent,
        ToastItemComponent,
        ToastContainerComponent,
        ToastDirective,
        ToastColorDirective,
        ToastIconDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ToastComponent,
        ToastDirective,
        ToastColorDirective,
        ToastIconDirective
    ]
})
export class NgxToastModule { }
