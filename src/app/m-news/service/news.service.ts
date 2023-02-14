import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from 'src/app/model/notizia';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl =
    'https://project-works-rest-api.onrender.com/api/v1/GROUP-I/news';

  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get<News[]>(this.apiUrl);
  }
  getNewsId(id: string) {
    return this.http.get<News>(`${this.apiUrl}/${id}`, {});
  }
}
