import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ClientOrder } from './client-order';
import {Products} from "../models/product";
describe('ClientOrder', () => {
  let service: ClientOrder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(ClientOrder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should provide the cart of selected products', () => {
    expect(service.cart).toBeTruthy();
    expect(service.cart.length).toBe(0);
    expect(service.cart()).toEqual([]);
  });
  it('should provide the method addToCart to add a product to cart', () => {
    expect(service.addToCart).toBeTruthy();
    service.addToCart(Products[0]);
    expect(service.cart()).toEqual([Products[0]]);
    service.addToCart(Products[1]);
    expect(service.cart().length).toEqual(2);
  });
  it('should provide the method removeFromCart to remove a product from cart', () => {
    expect(service.removeFromCart).toBeTruthy();
    service.addToCart(Products[0]);
    service.addToCart(Products[1]);
    service.removeFromCart(Products[0]);
    expect(service.cart().length).toEqual(1);
  });
  it('should provide the method updateQuantity to update the quantity of a product', () => {
    expect(service.updateQuantity).toBeTruthy();
    service.addToCart(Products[0]);
    service.updateQuantity(Products[0].id, 2);
    expect(service.cart()[0].quantity).toEqual(2);
  });
  it('should provide the method updateLanguages to update the languages of a product', () => {
    expect(service.updateLanguages).toBeTruthy();
    service.addToCart(Products[0]);
    service.updateLanguages(Products[0].id, 2);
    expect(service.cart()[0].languages).toEqual(2);
  });
  it ('should provide the total of the cart', () => {
    expect(service.total).toBeTruthy();
    expect(service.total()).toEqual(0);
    service.addToCart(Products[0]);
    expect(service.total()).toEqual(service.cart()[0].price);
    service.addToCart(Products[1]);
    expect(service.total()).toEqual(service.cart()[0].price + service.cart()[1].price);
    service.updateLanguages(Products[0].id, 2);
    service.updateQuantity(Products[1].id, 2);
    expect(service.total()).toEqual(service.cart()[0].price + (service.cart()[0].quantity * service.cart()[0].languages * 30) +  service.cart()[1].price);
  })
});
