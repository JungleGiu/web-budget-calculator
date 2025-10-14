import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InfoModal {
  isOpen = signal(false);
  type = signal('');
  open() {
    this.isOpen.set(true);
  }
  close() {
    this.isOpen.set(false);
  }
}
