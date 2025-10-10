import { computed, Injectable, signal } from '@angular/core';
import { Product, Products } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ClientOrder {

  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cart.update(cart => [...cart, product]);
  }

  removeFromCart(id: number) {
    this.cart.update(cart => cart.filter(p => p.id !== id));
  }

  total = computed(() =>
    this.cart().reduce((sum, p) => sum + p.price * p.quantity, 0)
  );

}



