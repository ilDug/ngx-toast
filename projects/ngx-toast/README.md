# NgxToast

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Code scaffolding

Run `ng generate component component-name --project ngx-toast` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-toast`.
> Note: Don't forget to add `--project ngx-toast` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-toast` to build the project. The build artifacts will be stored in the `dist/` directory.
# NgxToast

Angular Toast, styled by Bootstrap 5

ANGULAR VERSION: 15

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

## Publishing

After building your library with `ng build ngx-toast`, go to the dist folder `cd dist/ngx-toast` and run `npm publish`.

## Running unit tests

Run `ng test ngx-toast` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
