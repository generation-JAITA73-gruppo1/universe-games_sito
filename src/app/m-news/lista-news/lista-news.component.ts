import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/model/notizia';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-lista-news',
  templateUrl: './lista-news.component.html',
  styleUrls: ['./lista-news.component.css'],
})
export class ListaNewsComponent {
  news$!: Observable<News[]>;

  /*
  STO TRATTANDO LISTA-NEWS COME FOSSE DETTAGLIO PER TESTARE VISUALIZZAZIONE,
  COLLEGAMENTO COMING SOON
  TANTO PER LA LISTA BASTA RIPRODURRE CSS  DI OVERVIEW-NEWS SENZA UNA LIMITAZIONE
  CHE GLI METTEREMO IN VISUALIZZAZIONE(SUL NUMERO DI QUANTE SE NE VEDONO)
  */

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.news$ = this.newsService.getNews();
  }
}
