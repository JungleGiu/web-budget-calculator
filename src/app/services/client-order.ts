import { Injectable } from '@angular/core';
import { Product} from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ClientOrder {

  Cart: Product[] = [];
  Total: number = 0;

addToCart(product: Product)  {
    this.Cart.push(product);
    this.calculateTotal();
  }
deleteFromCart(product: Product) {
  this.Cart = this.Cart.filter(item => item.id !== product.id);
  this.calculateTotal();
}
calculateTotal() {
    this.Cart.forEach(product => {
      this.Total += product.price + (product.quantity * product.languages);
    });
  }
}



