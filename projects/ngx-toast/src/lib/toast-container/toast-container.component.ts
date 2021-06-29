import { Component, OnInit } from '@angular/core';
import { NgxToastService } from '../ngx-toast.service';
import { DToast } from '../toast';

@Component({
    selector: 'toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss']
})
export class ToastContainerComponent implements OnInit {
    public toasts: DToast[] = [];
    constructor(private toastService: NgxToastService) { }

    ngOnInit() {
        this.toastService.toasts$.subscribe(t => this.toasts.push(t))
    }

    /** chiude il toast */
    public closeItem(item) {
        const i = this.toasts.indexOf(item);
        if (i > -1) this.toasts.splice(i, 1);
    }

}
