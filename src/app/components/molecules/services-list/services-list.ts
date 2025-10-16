import { Component, Input, WritableSignal } from '@angular/core';
import { inject } from '@angular/core';
import { ClientOrder } from '../../../services/client-order';
import { ServiceCard } from '../service-card/service-card';
import { Products, Product } from '../../../models/product';
@Component({
  selector: 'app-services-list',
  imports: [ServiceCard],
  templateUrl: './services-list.html',
  styleUrl: './services-list.scss',
})
export class ServicesList {
  @Input({ required: true }) isSubmitted! : WritableSignal<boolean>  ;
  
  clientOrder = inject(ClientOrder);
  total = this.clientOrder.total;
  products = Products;
  
  onUpdateCart({ product, isSelected }: { product: Product; isSelected: boolean }) {
    if (isSelected === true) {
      this.clientOrder.addToCart(product);
    } else if (isSelected === false) {
      this.clientOrder.removeFromCart(product);
    }
  }
  onUpdateQuantity({ productId, quantity }: { productId: number; quantity: number }) {
    this.clientOrder.updateQuantity(productId, quantity);
  }
  onUpdateLanguages({ productId, languages }: { productId: number; languages: number }) {
    this.clientOrder.updateLanguages(productId, languages);
  }
}
