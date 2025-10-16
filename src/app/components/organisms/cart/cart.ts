import { Component, inject, signal } from '@angular/core';
import { ServicesList } from '../../molecules/services-list/services-list';
import { CheckoutForm } from '../../molecules/checkout-form/checkout-form';
import { InfoModal } from '../../../services/info-modal';

@Component({
  selector: 'app-cart',
  imports: [ServicesList, CheckoutForm],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  infoModal = inject(InfoModal);

  isSubmitted = signal(false);

  onFormSubmitted() {
    this.isSubmitted.set(true);

    setTimeout(() => this.isSubmitted.set(false), 0);
  
  }
}
