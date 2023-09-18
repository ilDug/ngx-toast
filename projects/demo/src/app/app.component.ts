import { Component } from '@angular/core';
import { NgxToastService } from 'ngx-toast';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private toast: NgxToastService
  ) { }


  open() {
    this.toast.info("May the Force be with you.", 55000);
    this.toast.error("These aren't the droids you're looking for. ", 55000);
    this.toast.warning("Do or do not. There is no try.", 55000);
  }
}
