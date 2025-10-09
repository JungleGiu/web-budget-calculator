import { Component } from '@angular/core';
import { Hero } from '../../components/molecules/hero/hero';
import { Header } from '../../components/molecules/header/header';
import { Cart } from '../../components/organisms/cart/cart';  
@Component({
  selector: 'app-home',
  imports: [ Cart],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
