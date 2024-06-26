import { NgModule } from '@angular/core';
import { ToastDirective } from './toast.directive';



@NgModule({
    imports: [
        ToastDirective,
    ],
    exports: [
        ToastDirective,
    ]
})
export class NgxToastModule { }
