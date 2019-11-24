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
    // locahost:4200
    this.moneyubttonclient = new MoneyButtonClient('9a50dab1d78f244a0a418d29c88f3a99');
    // ryejoon.github.io//bsv-angular-tutorial/
    // this.moneyubttonclient = new MoneyButtonClient('2480a16f3653290b4c494d59c1c4e733');

    const refreshToken = this.moneyubttonclient.getRefreshToken();
    console.log(refreshToken);
    if (!refreshToken) {
      console.log(this.moneyubttonclient);
    }

    this.moneyubttonclient.handleAuthorizationResponse()
      .then(async res => {
        console.log(res);
        const refreshToken2 = this.moneyubttonclient.getRefreshToken();
        console.log(refreshToken2);
        const identity = await this.moneyubttonclient.getIdentity();
        console.log(identity);
        const prof = await this.moneyubttonclient.getUserProfile(identity.id);
        console.log(prof);

        // const balance = await this.moneyubttonclient.getBalance(identity.id);
        // console.log(balance);
      });
  }

  requestMbOAuth() {
    // this.moneyubttonclient.requestAuthorization('users.balance:read',
    //   'http://localhost:4200/');
    this.moneyubttonclient.requestAuthorization('auth.user_identity:read',
      'http://localhost:4200/');
    this.moneyubttonclient.requestAuthorization('users.profiles:read',
      'http://localhost:4200/');
      // 'https://ryejoon.github.io/bsv-angular-tutorial/');
  }
}
