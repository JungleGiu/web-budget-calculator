import { Injectable, signal } from '@angular/core';
import { Prospects, Prospect } from '../models/prospect';
@Injectable({
  providedIn: 'root'
})
export class ProspectsHistory {
  prospects = signal(Prospects);

  sortByDate() {
    this.prospects.set(this.prospects().sort((a, b) => b.date.getTime() - a.date.getTime()));
  }

  sortByTotal() {
    this.prospects.set(this.prospects().sort((a, b) => b.total - a.total));
  }

  sortByName() {
    this.prospects.set(
      this.prospects().sort(
        (a: Prospect, b: Prospect): number => 
          (a.name && b.name) ? a.name.localeCompare(b.name) : 0
      )
    );
  }
  searchByName(searchTerm: string) {
    this.prospects.set(
      this.prospects().filter((prospect: Prospect) =>
        prospect.name?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }
}
