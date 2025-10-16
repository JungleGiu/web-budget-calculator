import { Component } from '@angular/core';
import { ProspectsList } from '../../molecules/prospects-list/prospects-list';
import { SearchFilters } from '../../molecules/search-filters/search-filters';
@Component({
  selector: 'app-prospects',
  imports: [ProspectsList, SearchFilters],
  templateUrl: './prospects.html',
  styleUrl: './prospects.scss'
})
export class Prospects {

}
