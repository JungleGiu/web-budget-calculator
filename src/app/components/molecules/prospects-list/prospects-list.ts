import { Component, signal,inject } from '@angular/core';
import { Prospects } from '../../../models/prospect';
import { ClientOrder } from '../../../services/client-order';
@Component({
  selector: 'app-prospects-list',
  imports: [],
  templateUrl: './prospects-list.html',
  styleUrl: './prospects-list.scss'
})
export class ProspectsList {
prospectsList = inject(ClientOrder).prospects

}
