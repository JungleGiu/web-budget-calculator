import { Component, Output, EventEmitter, output } from '@angular/core';
import { Input, signal } from '@angular/core';
import { Product } from '../../../models/product';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-service-card',
  imports: [FormsModule],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
})
export class ServiceCard {
  @Input({ required: true }) product!: Product;
  @Output() updateCart = new EventEmitter<{
    product: Product;
    isSelected: boolean;
  }>();
  @Output() quantity = new EventEmitter<{ productId: number; quantity: number }>();
  @Output() languages = new EventEmitter<{ productId: number; languages: number }>();

  isSelected = false;


  toggleSelection(selected: boolean) {
    this.isSelected = selected;
    this.updateCart.emit({ product: this.product, isSelected: selected });
  }
  updateQuantity(quantity: string) {
    let parsedInput = parseInt(quantity);
    this.quantity.emit({ productId: this.product.id, quantity: parsedInput });
  }
  updateLanguages(languages: string) {
    let parsedInput = parseInt(languages);
    this.languages.emit({ productId: this.product.id, languages: parsedInput });
  }
}
