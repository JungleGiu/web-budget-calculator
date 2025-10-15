import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root',
})
export class ClientOrder {
  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cart.update((cart) => [...cart, product]);
  }
  updateQuantity(productId: number, quantity: number) {
    this.cart.update((cart) => cart.map((p) => (p.id === productId ? { ...p, quantity } : p)));
  }
  updateLanguages(productId: number, languages: number) {
    this.cart.update((cart) => cart.map((p) => (p.id === productId ? { ...p, languages } : p)));
  }
 removeFromCart(product: Product) {
    this.cart.update((cart) => cart.filter((p) => p.id !== product.id));
  }
  resetCart() {
    this.cart.set([]);
  }
  total = computed(() =>
    this.cart().reduce((sum, p) => sum + p.price + (p.quantity * p.languages * 30), 0)
  );
}
