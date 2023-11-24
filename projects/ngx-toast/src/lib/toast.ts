import { v4 as uuidv4 } from 'uuid';;

export class DToast {
  /** UUID */
  readonly id: string;

  /** titolo del toasr */
  public title: string;

  /** messaggio del toast  */
  public message: string;

  /** tipo ['INFO', 'WARNING', 'ERROR'] */
  public type: string;

  /** data del toast */
  public time: number;


  /** la vita del toast prima di autochiudersi (in millisecondi)
   * default = 0 ,  no nsi chiude mai
   */
  public duration: number;


  constructor(message: string, title?: string, options?: DToastOptions) {
    this.id = uuidv4();
    this.message = message;
    this.duration = options && options.duration ? options.duration : 0;

    /** imposta il tipo in base alla opzioni */
    this.type = options && options.type ? this.validateType(options.type) : 'info';
    this.title = title ? title : (this.type);
    this.time = new Date().getTime();
    return this;
  }


  public setDuration(time: number) {
    this.duration = time;
    return this;
  }


  public setType(type: string) {
    this.type = this.validateType(type)
  }



  /**
   * valuta l'opzione type se è tra quele ammisibili
   * @param type stringa che identifica il tipo di toast
   */
  public validateType(type: string): string {
    type = type.toLowerCase();

    switch (type) {
      case 'info': return 'info';
      case 'error': return 'error';
      case 'warning': return 'warning';
      default: return 'info';
    }
  }


}



export interface DToastOptions {
  /** tipo ['INFO', 'WARNING', 'ERROR'] */
  type?: string;

  /** numerodi millisecondi prima di chiudersi */
  duration?: number

}


