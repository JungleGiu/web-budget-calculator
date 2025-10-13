import { TestBed } from '@angular/core/testing';

import { InfoModal } from './info-modal';

describe('InfoModal', () => {
  let service: InfoModal;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoModal);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
