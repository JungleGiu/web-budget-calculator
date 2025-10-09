import { Component, signal } from '@angular/core';
import { inject } from '@angular/core';
import { ClientOrder } from '../../../services/client-order';
import { ServiceCard } from '../service-card/service-card';
import { Products, Product } from '../../../models/product';
@Component({
  selector: 'app-services-list',
  imports: [ServiceCard],
  templateUrl: './services-list.html',
  styleUrl: './services-list.scss'
})
export class ServicesList {
  clientOrder = inject(ClientOrder);

  total = this.clientOrder.Total;
  products = signal(Products)


  updateCart(product: Product) {
    this.clientOrder.addToCart(product);
  }

}
