import { Component } from '@angular/core';
import { Cart } from '../../components/organisms/cart/cart';
import { Hero } from "../../components/molecules/hero/hero";  
import { Prospects } from '../../components/organisms/prospects/prospects';
@Component({
  selector: 'app-home',
  imports: [Cart, Hero, Prospects],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
