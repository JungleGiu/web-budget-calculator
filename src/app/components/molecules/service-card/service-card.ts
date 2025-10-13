import { Component, Output, EventEmitter } from '@angular/core';
import { Input, inject } from '@angular/core';
import { Product } from '../../../models/product';
import { InfoModal } from '../../../services/info-modal';

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
})
export class ServiceCard {
  @Input({ required: true }) product!: Product;
  @Output() updateCart = new EventEmitter<{
    product: Product;
    isSelected: boolean;
  }>();
  @Output() quantity = new EventEmitter<{
    productId: number;
    quantity: number;
  }>();
  @Output() languages = new EventEmitter<{
    productId: number;
    languages: number;
  }>();

  isSelected = false;
  infoModal = inject(InfoModal);
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
