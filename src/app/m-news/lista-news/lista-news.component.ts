import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChosenFilter, Selezione } from 'src/app/model/filterTypes';
import { Notizia } from 'src/app/model/notizia';
import { FilterService } from 'src/app/shared/service/filter.service';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-lista-news',
  templateUrl: './lista-news.component.html',
  styleUrls: ['./lista-news.component.css'],
})
export class ListaNewsComponent implements OnInit, OnDestroy {
  news!: Notizia[];
  filterSubscription!: Subscription;
  filterTypes: Selezione = {
    categories: true,
    newsAuthorName: true,
    reviewerName: false,
    tag: true,
    reviewedGame: false,
  };
  selectedFilters?: ChosenFilter;

  //mi dà i filtri selezionati sotto forma di array da stampare nel template
  selectedFiltersValues!: string[];

  //booleano che mi dice se l'oggetto dei filtri non ha valore
  noSelectedFilter: boolean = true;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private filtersService: FilterService
  ) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe((list) => (this.news = list));

    this.filterSubscription = this.filtersService.filtersChanged$.subscribe(
      (filters) => {
        this.selectedFilters = filters;
        // console.log(Object.values(this.selectedFilters));
        this.noSelectedFilter = Object.values(this.selectedFilters).every(
          (x) => x == null
        );
        this.selectedFiltersValues = Object.values(this.selectedFilters).filter(
          (x) => x != null
        );

        this.newsService
          .filterNewsBy(filters)
          .subscribe((list) => (this.news = list));
      }
    );
  }

  ngOnDestroy(): void {
    this.filterSubscription.unsubscribe();
  }
}
