import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ChosenFilter } from 'src/app/model/filterTypes';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filtersChanged = new BehaviorSubject<ChosenFilter>({
    categories: null,
    tag: null,
    newsAuthorName: null,
    reviewerName: null,
    reviewedGame: null,
  });

  readonly filtersChanged$: Observable<ChosenFilter> =
    this.filtersChanged.pipe();

  changeFilter(filterInput: ChosenFilter) {
    this.filtersChanged.next(filterInput);
  }

  resetFilters() {
    const filtersNull = {
      categories: null,
      newsAuthorName: null,
      reviewerName: null,
      tag: null,
      reviewedGame: null,
    };
    this.filtersChanged.next(filtersNull);
  }
}
