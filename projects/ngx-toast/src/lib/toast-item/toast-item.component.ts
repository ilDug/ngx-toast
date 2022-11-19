import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { timer } from 'rxjs';
import { DToast } from '../toast';

@Component({
    selector: 'toast-item',
  templateUrl: './toast-item.component.html',
  styleUrls: ['./toast-item.component.scss']
})
export class ToastItemComponent implements OnInit {

    @Input() data: DToast;
    @Output() close = new EventEmitter();

    /** animazioni  */
    public animationIn: boolean = false;
    public animationOut: boolean = false;
    private delta: number = 1000;

    constructor() { }

    ngOnInit() {
        this.autoClose();
        this.animationIn = true
    }


    /** chiude il toast */
    public onClose() {
        this.animationOut = true;
        setTimeout(() => { this.close.emit(this.data) }, this.delta);
    }



    /** gestisce la chiusura automatica */
    private autoClose() {
        if (this.data.duration === 0) return;

        /** imposta il timer che fa chiudere il toast */
        timer(this.data.duration).subscribe(x => this.onClose())
    }

}
