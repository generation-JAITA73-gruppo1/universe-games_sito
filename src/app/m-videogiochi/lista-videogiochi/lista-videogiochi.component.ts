import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { ChosenFilter, Selezione } from 'src/app/model/filterTypes';
import { Videogioco } from 'src/app/model/videogioco';
import { FilterService } from 'src/app/shared/service/filter.service';
import { VideogiochiService } from '../service/videogiochi.service';

@Component({
  selector: 'app-lista-videogiochi',
  templateUrl: './lista-videogiochi.component.html',
  styleUrls: ['./lista-videogiochi.component.css'],
})
export class ListaVideogiochiComponent implements OnInit, OnDestroy {
  games!: Videogioco[];
  filterSubscription!: Subscription;
  filterTypes: Selezione = {
    categories: true,
    newsAuthorName: false,
    reviewerName: false,
    tag: false,
    reviewedGame: false,
  };
  selectedFilters?: ChosenFilter;

  //mi dà i filtri selezionati sotto forma di array da stampare nel template
  selectedFiltersValues!: string[];

  //booleano che mi dice se l'oggetto dei filtri non ha valore
  noSelectedFilter: boolean = true;

  constructor(
    private videogiochiService: VideogiochiService,
    private filtersService: FilterService
  ) {}

  ngOnInit(): void {
    this.videogiochiService
      .getVideogiochi()
      .subscribe((list) => (this.games = list));

    this.filterSubscription = this.filtersService.filtersChanged$.subscribe(
      (filters) => {
        this.selectedFilters = filters;
        this.noSelectedFilter = Object.values(this.selectedFilters).every(
          (x) => x == null
        );
        this.selectedFiltersValues = Object.values(this.selectedFilters).filter(
          (x) => x != null
        );
      }
    );
  }

  ngOnDestroy(): void {
    this.filterSubscription.unsubscribe();
  }
}
