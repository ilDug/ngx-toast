import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { timer } from 'rxjs';
import { DToast } from '../toast';
import { NgIf, DatePipe } from '@angular/common';
import { ToastColorDirective } from '../toast-color.directive';

@Component({
    selector: 'toast-item',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
    standalone: true,
    imports: [ToastColorDirective, NgIf, DatePipe]
})
export class ToastComponent implements OnInit {

    @Input() data: DToast;
    @Output() close = new EventEmitter();

    /** animazioni  */
    public animationIn: boolean = false;
    public animationOut: boolean = false;
    private delta: number = 1000;

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
