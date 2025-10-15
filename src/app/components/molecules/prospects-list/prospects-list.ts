import { Component, inject } from '@angular/core';
import { ProspectsHistory } from '../../../services/prospects-history';
@Component({
  selector: 'app-prospects-list',
  imports: [],
  templateUrl: './prospects-list.html',
  styleUrl: './prospects-list.scss'
})
export class ProspectsList {
prospectsList = inject(ProspectsHistory).prospects

}
