import { Component, signal } from '@angular/core';
import { Prospects } from '../../../models/prospect';
@Component({
  selector: 'app-prospects-list',
  imports: [],
  templateUrl: './prospects-list.html',
  styleUrl: './prospects-list.scss'
})
export class ProspectsList {
prospectsList = signal(Prospects)

}
