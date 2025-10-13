import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkout-form',
  imports: [],
  templateUrl: './checkout-form.html',
  styleUrl: './checkout-form.scss'
})
export class CheckoutForm {
@Input({ required: true}) total: number = 0
}
