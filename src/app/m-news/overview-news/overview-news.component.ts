import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Notizia } from 'src/app/model/notizia';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-overview-news',
  templateUrl: './overview-news.component.html',
  styleUrls: ['./overview-news.component.css'],
})
export class OverviewNewsComponent implements OnInit {
  news$!: Observable<Notizia[]>;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.news$ = this.newsService.getNews();
  }
}
