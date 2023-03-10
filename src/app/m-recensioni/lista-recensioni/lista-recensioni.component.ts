import { Component, OnDestroy, OnInit } from '@angular/core';
import { defaultUrlMatcher } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Selezione, ChosenFilter } from 'src/app/model/filterTypes';
import { Recensione, ReviewedGame } from 'src/app/model/recensione';
import { FilterService } from 'src/app/shared/service/filter.service';
import { RecensioniService } from '../service/recensioni.service';

@Component({
  selector: 'app-lista-recensioni',
  templateUrl: './lista-recensioni.component.html',
  styleUrls: ['./lista-recensioni.component.css'],
})
export class ListaRecensioniComponent implements OnInit, OnDestroy {
  reviews!: Recensione[];

  //subscription per gestire i filtri che vengono inputtati come proprietà
  filterSubscription!: Subscription;
  filterTypes: Selezione = {
    categories: false,
    newsAuthorName: false,
    reviewerName: true,
    tag: false,
    reviewedGame: true,
  };

  //mi dà i filtri selezionati sotto forma di array da stampare nel template
  selectedFiltersValues!: string[];

  //booleano che mi dice se l'oggetto dei filtri non ha valore
  noSelectedFilter: boolean = true;

  sortTypeReceived?: string;

  constructor(
    private recensioniService: RecensioniService,
    private filtersService: FilterService
  ) {}

  ngOnInit(): void {
    this.recensioniService
      .getRecensioni()
      .subscribe((list) => (this.reviews = list));

    //ogni volta che i filtri cambiano aggiorno la lista e assegno un nuovo valore a noSelectedFilter e a selectedFilterValues
    this.filterSubscription = this.filtersService.filtersChanged$.subscribe(
      (filters) => {
        const selectedFilters: ChosenFilter = filters;
        // console.log(Object.values(selectedFilters));
        this.noSelectedFilter = Object.values(selectedFilters).every(
          (x) => x == null
        );
        this.selectedFiltersValues = Object.values(selectedFilters)
          .filter((x) => x != null)
          .map((x) => {
            if (x.hasOwnProperty('name')) return x.name;
            else return x;
          });

        this.recensioniService
          .filterReviewsBy(filters)
          .subscribe((list) => (this.reviews = list));
      }
    );
  }

  sortBy(sortType: string) {
    switch (sortType) {
      case '':
        console.log('trovato date');
        this.recensioniService
          .getRecensioni()
          .subscribe((list) => (this.reviews = list));
        break;
      default:
        this.recensioniService
          .sortRecensioniBy(sortType)
          .subscribe((list) => (this.reviews = list));
        break;
    }
  }

  ngOnDestroy(): void {
    this.filterSubscription.unsubscribe();
  }
}
