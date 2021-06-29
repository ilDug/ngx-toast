import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { DToast, DToastOptions } from './toast';

@Injectable({
  providedIn: 'root'
})
export class NgxToastService {

    private toasts: ReplaySubject<DToast> = new ReplaySubject(1);

    /** stream dei dati dal server */
    get toasts$(): Observable<DToast> { return this.toasts.asObservable() }


    constructor() { }

    /**
     * genera un nuovo toast direttamente 
     */
    public create(message: string, options?: DToastOptions) {
        const t = new DToast(message, null, options)
        this.toasts.next(t)
        console.log("TOAST: ", message);
        return t;
    }


    public info(message: string, duration?: number) {
        this.create(message, { duration: duration, type: 'info' })
    }

    public error(message: string, duration?: number) {
        this.create(message, { duration: duration, type: 'error' })
    }

    public warning(message: string, duration?: number) {
        this.create(message, { duration: duration, type: 'warning' })
    }
}
