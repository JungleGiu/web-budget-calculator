import { Component, inject } from '@angular/core';
import { ServicesList } from '../../molecules/services-list/services-list';
import { CheckoutForm } from '../../molecules/checkout-form/checkout-form';
import { Prospect } from '../../../models/prospect';
import { InfoModal } from '../../../services/info-modal';
import { ClientOrder } from '../../../services/client-order';
@Component({
  selector: 'app-cart',
  imports: [ServicesList, CheckoutForm],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
clientOrder = inject(ClientOrder)
infoModal = inject(InfoModal)
total = this.clientOrder.total


}
