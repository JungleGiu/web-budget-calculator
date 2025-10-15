import { Injectable, signal } from '@angular/core';
import { Prospects } from '../models/prospect';
@Injectable({
  providedIn: 'root'
})
export class ProspectsHistory {
  prospects = signal(Prospects);
}
