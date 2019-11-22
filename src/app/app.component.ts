import {Component, OnInit} from '@angular/core';
import { MoneyButtonClient } from '@moneybutton/api-client';

@Component({
  selector: 'app-root',
  template: `
    <app-message-display></app-message-display>
    <app-text-input></app-text-input>
    <router-outlet></router-outlet>
    <button (click)="requestMbOAuth()">Request MB OAuth</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bsv-tutorial';
  moneyubttonclient: MoneyButtonClient;

  ngOnInit() {
    this.moneyubttonclient = new MoneyButtonClient('2480a16f3653290b4c494d59c1c4e733');
    const refreshToken = this.moneyubttonclient.getRefreshToken();
    console.log(refreshToken);
    if (!refreshToken) {
      console.log(this.moneyubttonclient);
    }

    this.moneyubttonclient.handleAuthorizationResponse()
      .then(res => console.log(res));
  }

  requestMbOAuth() {
    this.moneyubttonclient.requestAuthorization('auth.user_identity:read',
      'https://ryejoon.github.io/bsv-angular-tutorial/');
  }
}
