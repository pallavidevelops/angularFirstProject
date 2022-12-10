import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  // templateUrl: './app.component.html',
  template: `<pm-products></pm-products>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular Application';
}
