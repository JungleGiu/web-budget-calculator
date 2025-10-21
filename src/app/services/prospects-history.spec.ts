import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ProspectsHistory } from './prospects-history';
import { Prospects, Prospect } from '../models/prospect';

describe('ProspectsHistory', () => {
  let service: ProspectsHistory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });

    service = TestBed.inject(ProspectsHistory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should provide the history of prospects', () => {
    expect(service.prospects).toBeTruthy();
    expect(service.prospects()).toEqual(Prospects);
  })
  it('should provide the method sortByDate to sort prospects by date', () => {
    expect(service.sortByDate).toBeTruthy();
    service.sortByDate();
    expect(service.prospects()).toEqual(Prospects.sort((a, b) => b.date.getTime() - a.date.getTime()));
  })
  it('should provide the method sortByTotal to sort prospects by total', () => {
    expect(service.sortByTotal).toBeTruthy();
    service.sortByTotal();
    expect(service.prospects()).toEqual(Prospects.sort((a, b) => b.total - a.total));
  })
  it('should provide the method sortByName to sort prospects by name', () => {
    expect(service.sortByName).toBeTruthy();
    service.sortByName();
    expect(service.prospects()).toEqual(Prospects.sort((a, b) => (a.name && b.name) ? a.name.localeCompare(b.name) : 0));
  })
  it('should provide the method searchByName to search prospects by name', () => {
    expect(service.searchByName).toBeTruthy();
    service.searchByName('');
    expect(service.prospects()).toEqual(Prospects);
    service.searchByName('John');
    expect(service.prospects()).toEqual(Prospects.filter((prospect: Prospect) => prospect.name?.toLowerCase().includes('john')));
  })
});
