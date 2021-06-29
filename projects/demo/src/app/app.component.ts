import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `

  <a href class="btn btn-primary" (click)="open()">Toast</a>
    
  `,
    styles: []
})
export class AppComponent {
    open() { }
}
