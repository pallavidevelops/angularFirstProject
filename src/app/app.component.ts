import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  // templateUrl: './app.component.html',
  template: `
  <ul class= 'nav navbar-nav'>
    <li class="nav-link"><a routerLink="welcome">Home</a></li>
    <li class="nav-link"><a routerLink="products">Product List</a></li>
  </ul>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular Application';
}
