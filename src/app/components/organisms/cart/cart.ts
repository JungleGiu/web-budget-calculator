import { Component, inject } from '@angular/core';
import { ServicesList } from '../../molecules/services-list/services-list';
import { CheckoutForm } from '../../molecules/checkout-form/checkout-form';
import { Prospect } from '../../../models/prospect';
import { ClientOrder } from '../../../services/client-order';
@Component({
  selector: 'app-cart',
  imports: [ServicesList, CheckoutForm],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
clientOrder = inject(ClientOrder)
cart = this.clientOrder.cart
total = this.clientOrder.total
}
