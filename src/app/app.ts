import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './components/molecules/hero/hero';
import { Header } from './components/molecules/header/header';
@Component({
  selector: 'app-root',
  imports: [Hero, Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
