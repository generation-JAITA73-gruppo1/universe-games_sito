import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { News } from 'src/app/model/notizia';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-dettaglio-news',
  templateUrl: './dettaglio-news.component.html',
  styleUrls: ['./dettaglio-news.component.css'],
})
export class DettaglioNewsComponent implements OnInit {
  newsDettaglio$!: Observable<News>;
  // ricetta!: Ricetta;

  constructor(
    private ricetteService: NewsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.newsDettaglio$ = this.route.params.pipe(
      map((params) => params['id'] as string),
      // switchMap è un operatore che serve a "cambiare l'observable con un altro"
      // viene utilizzato nei casi in cui voglio trasmettere dalla pipe un valore
      // che a sua volta arriva da un altro tubo
      switchMap((id) => this.ricetteService.getNewsId(id))
    );
  }
}
