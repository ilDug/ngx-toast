import { Component, OnInit, input, output, signal } from '@angular/core';
import { timer } from 'rxjs';
import { DToast } from '../toast';
import { NgIf, DatePipe } from '@angular/common';
import { ToastColorDirective } from '../toast-color.directive';
import { ToastBorderColorDirective } from '../toast-border-color.directive';

@Component({
    selector: 'toast-item',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
    standalone: true,
    imports: [ToastColorDirective, NgIf, DatePipe, ToastBorderColorDirective]
})
export class ToastComponent implements OnInit {

    data = input.required<DToast>({ alias: 'data' });
    close = output<DToast>();

    /** animazioni  */
    animationIn = signal<boolean>(false);
    animationOut = signal<boolean>(false);

    /** tempo di attesa prima di chiudere il toast in modo che l'animazione possa essere eseguita */
    private readonly DELTA: number = 1000;


    // necessario ( non funzione con constructor)
    ngOnInit() {
        this.autoClose();
        this.animationIn.set(true);
    }


    /** chiude il toast */
    public onClose() {
        this.animationOut.set(true);

        /** chiude il toast dopo che l'animazione è terminata */
        timer(this.DELTA).subscribe(x => this.close.emit(this.data()))
    }


    /** gestisce la chiusura automatica */
    private autoClose() {
        if (this.data().duration === 0) return;

        /** imposta il timer che fa chiudere il toast */
        timer(this.data().duration).subscribe(x => this.onClose())
    }

}
