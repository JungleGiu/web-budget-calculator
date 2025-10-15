import { TestBed } from '@angular/core/testing';

import { ProspectsHistory } from './prospects-history';

describe('ProspectsHistory', () => {
  let service: ProspectsHistory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProspectsHistory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
