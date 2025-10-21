import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { CheckoutForm } from './checkout-form';
import { ClientOrder } from '../../../services/client-order';
import { Product } from '../../../models/product';
import {  Prospects } from '../../../models/prospect';
describe('CheckoutForm', () => {
  let component: CheckoutForm;
  let fixture: ComponentFixture<CheckoutForm>;
  let clientOrderMock: Partial<ClientOrder>;
  beforeEach(async () => {
    clientOrderMock = {
      cart: signal([{ id: 1, name: 'web', price: 100, quantity: 1, languages: 1 }] as Product[]),
      total: signal(100),
    };
    await TestBed.configureTestingModule({
      imports: [CheckoutForm],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: ClientOrder,
          useValue: clientOrderMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckoutForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
    Prospects.length = 0;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit an event when the form is submitted', () => {
    const formSubmittedSpy = spyOn(component.formSubmitted, 'emit');
    component.formSubmitted.emit();
    expect(formSubmittedSpy).toHaveBeenCalled();
  });
  it('should generate a new Prospect and add it to the Prospects array and reset the form', () => {
    const newProspect = {
      name: 'John Doe',
      email: 'qj8dM@example.com',
      phoneNumber: '1234567890',
    };
    component.newProspect.setValue(newProspect);
    component.generateProspect();

    expect(Prospects.length).toBe(1);
    const savedProspect = Prospects[0];
    expect(savedProspect.name).toBe('John Doe');
    expect(savedProspect.total).toBe(100);
    expect(savedProspect.items.length).toBe(1);
    expect(savedProspect.items[0].name).toBe('web');

    expect(component.newProspect.value).toEqual({
      name: null,
      email: null,
      phoneNumber: null,
    });
  });

   it('should not generate a Prospect if form is invalid', () => {
    component.newProspect.setValue({
      name: '',
      email: '',
      phoneNumber: '',
    });

    component.generateProspect();
    expect(Prospects.length).toBe(0);
  });
});
