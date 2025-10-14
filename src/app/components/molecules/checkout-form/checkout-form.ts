import { Component,  inject } from '@angular/core';
import { ClientOrder } from '../../../services/client-order';
import { Prospect, Prospects } from '../../../models/prospect';
import { FormGroup, FormControl, ReactiveFormsModule, } from '@angular/forms';
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


newProspect : FormGroup = new FormGroup({
  name: new FormControl(''),
  email: new FormControl(''),
  phoneNumber: new FormControl(0),
})

userdata = this.newProspect.value
generateProspect() {
try{
  const prospect: Prospect = {
    id: Prospects.length + 1,
    date: new Date(),
    name: this.userdata.name,
    email: this.userdata.email,
    phoneNumber: this.userdata.phoneNumber,
    items: this.cart(),
    total: this.total()
  };
  Prospects.push(prospect);
  console.log(prospect);
  this.newProspect.reset();}
  catch(error){console.log(error)}
}
}
