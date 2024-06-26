import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgxToastModule } from 'ngx-toast';
import { NgxToastService } from 'ngx-toast';
import { concatMap, delay, from, of } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: "./app.component.html",
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [CommonModule, NgxToastModule]
})
export class AppComponent {

    private toast = inject(NgxToastService)

    // Your array
    private items = [
        { message: "May the Force be with you.", type: 'info' },
        { message: "These aren't the droids you're looking for.", type: 'error' },
        { message: "Do or do not. There is no try.", type: 'warning' },
    ];

    // Interval time in milliseconds
    private intervalTime = 1000;
    private closeAfter = 5500;

    // Creating an Observable that emits each item of the array after a certain interval

    open() {
        from(this.items)
            .pipe(
                concatMap(item => of(item).pipe(delay(this.intervalTime)))
            )
            .subscribe(item =>
                this.toast[item.type](item.message, this.closeAfter)
            )
    }
}
