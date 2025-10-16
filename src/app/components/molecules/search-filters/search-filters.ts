import { Component, inject } from '@angular/core';
import { ProspectsHistory } from '../../../services/prospects-history'; 
@Component({
  selector: 'app-search-filters',
  imports: [],
  templateUrl: './search-filters.html',
  styleUrl: './search-filters.scss'
})
export class SearchFilters {
allProspects = inject(ProspectsHistory);


filterByDate() {
  this.allProspects.sortByDate();
}
filterByTotal() {
  this.allProspects.sortByTotal();
}
orderByName() {
  this.allProspects.sortByName();
}
filterByName(searchTerm: string) {
  this.allProspects.searchByName(searchTerm);
}
}
