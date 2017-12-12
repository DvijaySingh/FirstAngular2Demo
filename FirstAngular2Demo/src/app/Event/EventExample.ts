
import { Component } from '@angular/core'

@Component({
    selector: 'my-app',
    template: `<button (click)='onclick()'> click me</button>`,
})
export class AppComponent {
    onclick(): void {
        console.log('click me');
    }
}
