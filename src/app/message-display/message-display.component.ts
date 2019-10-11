import { Component, OnInit } from '@angular/core';
import {MessageStoreService} from '../message-store.service';

@Component({
  selector: 'app-message-display',
  template: `
    <div>
      <div *ngFor="let message of messageStore.messages$ | async">
          {{message}}
      </div>
    </div>
  `,
  styles: []
})
export class MessageDisplayComponent implements OnInit {

  constructor(public messageStore: MessageStoreService) { }

  ngOnInit() {
  }

}
