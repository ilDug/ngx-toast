import { Component } from '@angular/core';
import { NgxToastService } from 'ngx-toast';

@Component({
  selector: 'app-root',
  template: `

<div dagToast>Prova....</div>

<a  class="btn btn-primary" (click)="open()">Toast</a>

  `,
  styles: []
})
export class AppComponent {
  constructor(
    private toast: NgxToastService
  ) { }


  open() {
    this.toast.info("ciao,  il messaggio", 55000);
    this.toast.error("ciao,  lorem ipsum asd  asd ergt sfiouwiuhiubib aswd iuqwedjkhb asiukjbd ", 55000);
    this.toast.warning("ciao,  il messaggio", 55000);
  }
}
