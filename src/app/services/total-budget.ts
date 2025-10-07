import { Injectable } from '@angular/core';
import { Product } from '../models/products';
@Injectable({
  providedIn: 'root'
})
export class TotalBudget {
  Products : Product[] = [];
  Total : number = 0;

  calculateTotal() {
    this.Products.forEach(product => {
      this.Total += product.price + (product.quantity * product.languages * 30);
    });
  }
}
