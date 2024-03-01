import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, BehaviorSubject } from 'rxjs';
import { DToast, DToastOptions } from './toast';

@Injectable({
  providedIn: 'root'
})
export class NgxToastService extends BehaviorSubject<DToast> {

  constructor() { super(null) }
  /**
   * genera un nuovo toast direttamente
   */
  public create(message: string, options?: DToastOptions) {
    const t = new DToast(message, null, options)
    this.next(t)
    console.log("TOAST: ", message);
    return t;
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
