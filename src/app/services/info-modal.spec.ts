import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { InfoModal } from './info-modal';

describe('InfoModal', () => {
  let service: InfoModal;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(InfoModal);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
