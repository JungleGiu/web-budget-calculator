import { Component,  inject, Output, EventEmitter} from '@angular/core';
import { ClientOrder } from '../../../services/client-order';
import { Prospect, Prospects } from '../../../models/prospect';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-checkout-form',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout-form.html',
  styleUrl: './checkout-form.scss'
})
export class CheckoutForm {
clientOrder = inject(ClientOrder)
total = this.clientOrder.total
cart = this.clientOrder.cart

@Output() formSubmitted = new EventEmitter<void>()



newProspect = new FormGroup({
  name: new FormControl('',{
    validators: [
      Validators.required,
      Validators.minLength(2),
    ],
  }),
  email: new FormControl('',{
    validators: [
      Validators.required,
      Validators.email,
    ],
  }),
  phoneNumber: new FormControl('',{
    validators: [
      Validators.required,
      Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'),
    ],
  }),
})


generateProspect() {
  if (this.newProspect.invalid || this.cart().length === 0) {
    this.newProspect.markAllAsTouched();
    return
  }
try{
  const prospect: Prospect = {
    id: Prospects.length + 1,
    date: new Date(),
    name: this.newProspect.value.name??'',
    email: this.newProspect.value.email??'',
    phoneNumber: this.newProspect.value.phoneNumber??'',
    items: this.cart(),
    total: this.total()
  };
  Prospects.push(prospect);
  this.newProspect.reset()
  this.formSubmitted.emit()
}
  catch(error){console.log(error)}
}
}
