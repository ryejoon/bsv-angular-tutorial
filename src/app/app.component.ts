import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-message-display></app-message-display>
    <app-text-input></app-text-input>
      <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bsv-tutorial';
}
