import { TestBed } from '@angular/core/testing';

import { ClientOrder } from './client-order';

describe('ClientOrder', () => {
  let service: ClientOrder;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientOrder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
