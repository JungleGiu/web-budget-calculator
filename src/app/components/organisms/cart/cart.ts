import { Component } from '@angular/core';
import { ServicesList } from '../../molecules/services-list/services-list';
import { CheckoutForm } from '../../molecules/checkout-form/checkout-form';
@Component({
  selector: 'app-cart',
  imports: [ServicesList, CheckoutForm],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {

}
