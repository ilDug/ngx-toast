import { Component, OnInit, effect, inject } from '@angular/core';
import { NgxToastService } from '../ngx-toast.service';
import { DToast } from '../toast';
import { NgFor } from '@angular/common';
import { ToastComponent } from '../toast/toast.component';
import { filter } from 'rxjs';

@Component({
    selector: 'toast-container',
    templateUrl: './toast-container.component.html',
    styleUrls: ['./toast-container.component.scss'],
    standalone: true,
    imports: [NgFor, ToastComponent]
})
export class ToastContainerComponent {

    toasts = inject(NgxToastService).toasts


    /** chiude il toast */
    public closeItem(item: DToast) {

        this.toasts.update(toasts => {
            const i = toasts.indexOf(item);
            if (i > -1) toasts.splice(i, 1);
            return [...toasts]
        })
    }

}
