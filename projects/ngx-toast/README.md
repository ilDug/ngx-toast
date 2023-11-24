# NgxToast

[![Publish Node.js Package](https://github.com/ilDug/ngx-toast/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/ilDug/ngx-toast/actions/workflows/npm-publish.yml)

Angular Toast, styled by Bootstrap 5

ANGULAR VERSION: 17

See [demo](https://ildug.github.io/ngx-toast/)

## Installation 

```
npm i @ildug/ngx-toast 
```

## Usage

Import the main module **NgxToastModule** in your angular project:

``` typescript
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgxToastModule } from 'ngx-toast';
import { NgxToastService } from 'ngx-toast';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.scss'],
  standalone: true,
   imports: [CommonModule, NgxToastModule]
})
export class AppComponent {
  private toast = inject(NgxToastService)


  open() {
    this.toast.info("May the Force be with you.", 55000);
    this.toast.error("These aren't the droids you're looking for. ", 55000);
    this.toast.warning("Do or do not. There is no try.", 55000);
  }
}
```

The directive **dagToast** must be added  everywhere in a component into an element that is always visible. We suggest to add to the main container of the application page.

``` html
<div dagToast>
    Main content of the application

    <button  class="btn btn-primary" (click)="open()">Toast</button>
</div>
``` 

Open a toast using the service NgxToastService.

NgxToastService has a main methods **create**

``` typescript
create(message: string, options?: {type: ['INFO', 'WARNING', 'ERROR'],  duration: milliseconds})  

```

and muliple shortcuts: 

- info
- danger
- warning
