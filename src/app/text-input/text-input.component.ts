import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
declare var moneyButton: any;
declare var bsv: any;

@Component({
  selector: 'app-text-input',
  template: `
    <input [(ngModel)]="message" type="text" />
    <button (click)="confirm()">확인</button>
    <div #moneyButton></div>
  `,
  styles: []
})
export class TextInputComponent implements OnInit {

  constructor() { }
  @ViewChild('moneyButton', {static: true}) moneyButtonElem: ElementRef;
  message: string;

  ngOnInit() {
  }

  confirm() {
    moneyButton.render(this.moneyButtonElem.nativeElement, {
      outputs: [{
        script: bsv.Script.buildSafeDataOut(['1NdoA7kgUnudC9Q1hywaZi8ru2MJgS999b', this.message]).toASM(),
        amount: '0',
        currency: 'BSV'
      }],
      onPayment: (arg) => {
        console.log('onPayment', arg);
      },
      onError: (arg) => {
        console.log('onError', arg);
      }
    });
  }
}
