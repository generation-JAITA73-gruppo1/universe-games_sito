import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, Observable, Subject, Subscription } from 'rxjs';
import { Selezione } from 'src/app/model/filterSelection';
import { Notizia } from 'src/app/model/notizia';
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
    reviewAuthorName: false,
    tag: true,
    game_id: false,
  };
  selectedCategoryFilter: string = '';
  /*
  STO TRATTANDO LISTA-NEWS COME FOSSE DETTAGLIO PER TESTARE VISUALIZZAZIONE,
  COLLEGAMENTO COMING SOON
  TANTO PER LA LISTA BASTA RIPRODURRE CSS  DI OVERVIEW-NEWS SENZA UNA LIMITAZIONE
  CHE GLI METTEREMO IN VISUALIZZAZIONE(SUL NUMERO DI QUANTE SE NE VEDONO)
  */

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe((list) => (this.news = list));
    // this.newsUpdate.subscribe((list) => (this.news = list));
  }

  filterListByCategoria(selectedCategory: string) {
    this.filterSubscription = this.newsService
      .filterNewsByCategoria(selectedCategory)
      .subscribe((list) => {
        this.news = list;
        this.selectedCategoryFilter = selectedCategory;
      });
  }

  ngOnDestroy(): void {
    if (this.filterSubscription != undefined) {
      this.filterSubscription.unsubscribe();
    }
    this.selectedCategoryFilter !== '';
  }
}
