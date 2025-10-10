import { Component, Output, EventEmitter } from '@angular/core';
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
@Output() updateCart = new EventEmitter<Product>();

isSelected = false;

toggleSelection(isSelected: boolean) {
  this.isSelected = isSelected;
  this.updateCart.emit({...this.product});
}


}

