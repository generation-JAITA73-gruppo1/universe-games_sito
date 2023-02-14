import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notizia } from 'src/app/model/notizia';
import { map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl =
    'https://project-works-rest-api.onrender.com/api/v1/GROUP-I/news';

  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get<Notizia[]>(this.apiUrl);
  }
  getNewsId(id: string) {
    return this.http.get<Notizia>(`${this.apiUrl}/${id}`, {});
  }

  filterNewsBy(categoria: string) {
    return this.getNews().pipe(
      map((fullList: Array<Notizia>) => {
        fullList.filter(
          (obj) => obj.category.toLowerCase() === categoria.toLowerCase()
        );
      })
    );
  }
}
