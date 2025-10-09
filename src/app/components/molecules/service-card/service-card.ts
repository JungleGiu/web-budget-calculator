import { Component, model, Output, EventEmitter } from '@angular/core';
import { Input  } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
})
export class ServiceCard {
@Input({required : true}) product!: Product ;

isSelected = false;

@Output() sendProduct = new EventEmitter<Product>();

toggleSelection() {
  this.isSelected = !this.isSelected;
}

changeQuantity(quantity : string) {
  this.product.quantity = parseInt(quantity);
}
changeLanguages(languages: string) {
  this.product.languages = parseInt(languages);
}
addToCart() {
  this.sendProduct.emit(this.product);
}

}

