import { Component, OnInit, inject } from '@angular/core';
import { NgxToastService } from '../ngx-toast.service';
import { DToast } from '../toast';
import { NgFor } from '@angular/common';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss'],
  standalone: true,
  imports: [NgFor, ToastComponent]
})
export class ToastContainerComponent implements OnInit {

  private toastService = inject(NgxToastService)
  public toasts: DToast[] = [];

  ngOnInit() {
    this.toastService.toasts$.subscribe(t => this.toasts.push(t))
  }

  /** chiude il toast */
  public closeItem(item) {
    const i = this.toasts.indexOf(item);
    if (i > -1) this.toasts.splice(i, 1);
  }

}
