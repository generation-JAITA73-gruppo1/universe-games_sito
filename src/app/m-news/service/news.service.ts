import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notizia } from 'src/app/model/notizia';
import { map, Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = 'http://localhost:3000/news';

  constructor(private http: HttpClient) {}

  getNews(): Observable<Notizia[]> {
    return this.http.get<Notizia[]>(this.apiUrl);
  }
  getNewsId(id: string) {
    return this.http.get<Notizia>(`${this.apiUrl}/${id}`, {});
  }

  filterNewsByCategoria(categoria: string): Observable<any> {
    // console.log(categoria);

    return this.getNews().pipe(
      map((fullList) =>
        fullList.filter(
          (obj) => obj.category.toLowerCase() == categoria.toLowerCase()
        )
      )
      //   tap((list) => console.log(list))
    );
  }

  filterNewsByTag(tag: string): Observable<any> {
    // console.log(categoria);

    return this.getNews().pipe(
      map((fullList) =>
        fullList.filter((obj) => {
          for (let o of obj.tags) {
            o.toLowerCase() == tag.toLowerCase();
          }
        })
      )
      //   tap((list) => console.log(list))
    );
  }
}
