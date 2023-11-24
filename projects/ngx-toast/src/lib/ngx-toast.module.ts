import { NgModule } from '@angular/core';
import { ToastComponent } from './toast/toast.component';
import { ToastContainerComponent } from './toast-container/toast-container.component';
import { ToastDirective } from './toast.directive';
import { CommonModule } from '@angular/common';
import { ToastColorDirective } from './toast-color.directive';



@NgModule({
    imports: [
        CommonModule,
        ToastComponent,
        ToastContainerComponent,
        ToastDirective,
        ToastColorDirective,
    ],
    exports: [
        ToastDirective,
    ]
})
export class NgxToastModule { }
