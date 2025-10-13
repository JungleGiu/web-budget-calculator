import { Component, Input, inject } from '@angular/core';
import { ClientOrder } from '../../../services/client-order';
@Component({
  selector: 'app-checkout-form',
  imports: [],
  templateUrl: './checkout-form.html',
  styleUrl: './checkout-form.scss'
})
export class CheckoutForm {

clientOrder = inject(ClientOrder)
total = this.clientOrder.total
cart = this.clientOrder.cart
}
