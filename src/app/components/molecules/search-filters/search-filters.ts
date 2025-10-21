import { Component, inject, signal } from '@angular/core';
import { ProspectsHistory } from '../../../services/prospects-history'; 
@Component({
  selector: 'app-search-filters',
  imports: [],
  templateUrl: './search-filters.html',
  styleUrl: './search-filters.scss'
})
export class SearchFilters {
allProspects = inject(ProspectsHistory);
searchTerm = signal('');

onSearchChange(value: string) {
  this.searchTerm.set(value);
  this.allProspects.searchByName(value.trim());
}
filterByDate() {
  this.allProspects.sortByDate();
}
filterByTotal() {
  this.allProspects.sortByTotal();
}
orderByName() {
  this.allProspects.sortByName();
}

}
