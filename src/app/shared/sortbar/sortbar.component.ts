import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sortbar',
  templateUrl: './sortbar.component.html',
  styleUrls: ['./sortbar.component.css'],
})
export class SortbarComponent {
  @Output() sortType = new EventEmitter<string>();

  emitSortDate() {
    this.sortType.next('date');
  }
}
