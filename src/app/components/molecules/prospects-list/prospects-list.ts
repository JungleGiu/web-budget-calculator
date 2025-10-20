import { Component, inject } from '@angular/core';
import { ProspectsHistory } from '../../../services/prospects-history';
import { Prospect } from '../../../models/prospect';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-prospects-list',
  imports: [RouterLink],
  templateUrl: './prospects-list.html',
  styleUrl: './prospects-list.scss'
})
export class ProspectsList {
prospectsList = inject(ProspectsHistory).prospects


parseParams(prospect : Prospect){
  return {
    id: prospect.id,
    name: prospect.name,
    email: prospect.email,
    phoneNumber: prospect.phoneNumber,
    date: prospect.date.toLocaleDateString(),
    items: encodeURIComponent(JSON.stringify(prospect.items)),
    total: prospect.total
  }
}
}
