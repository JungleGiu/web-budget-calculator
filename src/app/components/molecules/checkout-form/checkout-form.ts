import { Component,  inject, OnInit } from '@angular/core';
import { ClientOrder } from '../../../services/client-order';
import { Prospect, Prospects } from '../../../models/prospect';
import { FormGroup, FormControl, ReactiveFormsModule,  } from '@angular/forms';
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


newProspect = new FormGroup({
  name: new FormControl(''),
  email: new FormControl(''),
  phoneNumber: new FormControl(''),
})


generateProspect() {
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
  console.log(Prospects[0]);
  this.newProspect.reset();}
  catch(error){console.log(error)}
}
}
