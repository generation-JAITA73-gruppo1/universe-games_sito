import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notizia } from 'src/app/model/notizia';
import { map, Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl =
    'https://project-works-rest-api.onrender.com/api/v1/GROUP-I/news';

  constructor(private http: HttpClient) {}

  getNews(): Observable<Notizia[]> {
    return this.http.get<Notizia[]>(this.apiUrl);
  }
  getNewsId(id: string) {
    return this.http.get<Notizia>(`${this.apiUrl}/${id}`, {});
  }

  filterNewsBy(categoria: string): Observable<any> {
    console.log(categoria);

    return this.getNews().pipe(
      map((fullList) =>
        fullList.filter(
          (obj) => obj.category.toLowerCase() == categoria.toLowerCase()
        )
      )
      //   tap((list) => console.log(list))
    );
  }
}
