import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Notizia } from 'src/app/model/notizia';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-dettaglio-news',
  templateUrl: './dettaglio-news.component.html',
  styleUrls: ['./dettaglio-news.component.css'],
})
export class DettaglioNewsComponent implements OnInit {
  newsDettaglio?: Notizia;
  news$!: Observable<Notizia[]>;

  //   ricetta!: Ricetta;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.news$ = this.newsService.getNews();

    this.route.params
      .pipe(
        map((params) => params['id'] as string),
        // switchMap è un operatore che serve a "cambiare l'observable con un altro"
        // viene utilizzato nei casi in cui voglio trasmettere dalla pipe un valore
        // che a sua volta arriva da un altro tubo
        switchMap((id) => this.newsService.getNewsId(id))
      )
      .subscribe((notizia) => {
        this.newsDettaglio = notizia;
      });
  }

  filterBy(categoria: string) {
    // this.news$ = this.newsService.filterNewsBy(categoria);
  }
}
