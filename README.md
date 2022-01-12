# NgxToast

Angular Toast, styled by Bootstrap 5

ANGULAR VERSION: 13

## Installation 

```
npm i @ildug/ngx-toast 
```

## Usage

Import the main module **NgxToastModule** in your angular project:

``` typescript
@NgModule({
    declarations: [
        ...
    ],
    imports: [
        ...,
        NgxToastModule,
        ...
    ],
    bootstrap: [...]
})
export class MyAppModule { }
```

The directive **dagToast** must be added  everywhere in a component into an element that is always visible. We suggest to add to the main container of the application page.

``` html
<div dagToast>
    Main content of the application

    <button  class="btn btn-primary" (click)="open()">Toast</button>
</div>
``` 

Open a toast using the service NgxToastService.

``` typescript
...
import { NgxToastService } from '@ildug/ngx-toast';
...

export class AppComponent {
    constructor(
        private toast: NgxToastService
    ) { }


    open() {
        this.toast.info("My message", 5000);
    }
}
```


NgxToastService has a main methods **create**

``` typescript
create(message: string, options?: {type: ['INFO', 'WARNING', 'ERROR'],  duration: milliseconds})  

```

and muliple shortcuts: 

- info
- danger
- warning
