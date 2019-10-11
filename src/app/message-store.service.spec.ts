import { TestBed } from '@angular/core/testing';

import { MessageStoreService } from './message-store.service';

describe('MessageStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageStoreService = TestBed.get(MessageStoreService);
    expect(service).toBeTruthy();
  });
});
