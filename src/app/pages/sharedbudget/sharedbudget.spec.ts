import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Sharedbudget } from './sharedbudget';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Product } from '../../models/product';
import { of } from 'rxjs';

describe('Sharedbudget', () => {
  let component: Sharedbudget;
  let fixture: ComponentFixture<Sharedbudget>;

  const mockItems: Product[] = [{ id: 1, name: 'web', description: 'MOCK PRODUCT', price: 100, quantity: 1, languages: 1 }];

  const mockActivatedRoute = {
    queryParamMap: of(
      convertToParamMap({
        id: '1',
        name: 'John',
        date: '2025-10-21',
        email: 'john@example.com',
        phoneNumber: '+123456789',
        total: '100',
        items: encodeURIComponent(JSON.stringify(mockItems)), // stringa JSON codificata
      })
    ),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sharedbudget],
      providers: [
        provideZonelessChangeDetection(),
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Sharedbudget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should parse query params and populate items', () => {
    expect(component.id).toBe(1);
    expect(component.name).toBe('John');
    expect(component.items.length).toBe(1);
    expect(component.items[0].name).toBe('web');
  });
});
