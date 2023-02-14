import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/model/notizia';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-overview-news',
  templateUrl: './overview-news.component.html',
  styleUrls: ['./overview-news.component.css'],
})
export class OverviewNewsComponent implements OnInit {
  news$!: Observable<News[]>;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.news$ = this.newsService.getNews();
  }
}
