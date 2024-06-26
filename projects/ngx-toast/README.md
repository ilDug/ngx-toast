# NgxToast

[![Publish Node.js Package](https://github.com/ilDug/ngx-toast/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/ilDug/ngx-toast/actions/workflows/npm-publish.yml)

Angular Toast

ANGULAR VERSION: 18 (now it use signals)

See [demo](https://ildug.github.io/ngx-toast/)

## Installation

```
npm i @ildug/ngx-toast
```

## Usage

Import the main module **NgxToastModule** in your angular component:

```typescript
import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { NgxToastModule } from "ngx-toast";
import { NgxToastService } from "ngx-toast";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    standalone: true,
    imports: [CommonModule, NgxToastModule],
})
export class AppComponent {
    private toast = inject(NgxToastService);

    open() {
        this.toast.info("May the Force be with you.", 55000);
        this.toast.error("These aren't the droids you're looking for. ", 55000);
        this.toast.warning("Do or do not. There is no try.", 55000);
    }
}
```

The directive **dagToast** must be added everywhere in a component into an element that is always visible. We suggest to add to the main container of the application page.

```html
<div dagToast>
    Main content of the application

    <button (click)="open()">Toast</button>
</div>
```

Open a toast using the service NgxToastService.

NgxToastService has a main methods **create**

```typescript
create(message: string, options?: {type: ['INFO', 'WARNING', 'ERROR'],  duration: milliseconds})

```

and muliple shortcuts:

-   info
-   danger
-   warning

## Styling colors

Some style properties can be adjusted usign css variables.

add these definition to your css style

```scss
:root {
    --c-main: hsl(194, 38%, 57%); // color for INFO toast
    --c-warn: hsl(48, 100%, 67%); // color for WARNING toast
    --c-error: hsl(0, 100%, 67%); // color for ERROR toast

    --toast-c: hsl(0, 0%, 25%); // toast text color
    --toast-bg: hsl(0, 0%, 100%); // toast background color
    --toast-b: hsl(0, 0%, 80%); // toast border color
}
```
