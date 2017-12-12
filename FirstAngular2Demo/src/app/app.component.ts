import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `<div>
  <ul class=" nav nav-tabs">
<li routerLinkActive="active"> <a routerLink="Home">Home</a></li>
<li routerLinkActive="active"> <a routerLink="Employees">Employee</a></li>
</ul>

<router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent  {
    usetext: string = "tsts";
}
