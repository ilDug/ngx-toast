import { Injectable, signal } from '@angular/core';
import { ReplaySubject, Observable, BehaviorSubject } from 'rxjs';
import { DToast, DToastOptions } from './toast';

@Injectable({
    providedIn: 'root'
})
export class NgxToastService {


    toasts = signal<DToast[]>([]);

    /**
     * genera un nuovo toast direttamente
     */
    public create(message: string, options?: DToastOptions): void {
        const t = new DToast(message, null, options)
        this.toasts.update(toasts => [...toasts, t])
    }


    public info(message: string, duration?: number) {
        this.create(message, { duration: duration, type: "INFO" })
    }

    public error(message: string, duration?: number) {
        this.create(message, { duration: duration, type: "ERROR" })
    }

    public warning(message: string, duration?: number) {
        this.create(message, { duration: duration, type: "WARNING" })
    }
}
