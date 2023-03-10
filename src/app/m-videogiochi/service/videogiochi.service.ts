import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Videogioco } from 'src/app/model/videogioco';

@Injectable({
  providedIn: 'root',
})
export class VideogiochiService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:3000/videogame';

  getVideogiochi(): Observable<Videogioco[]> {
    return this.http.get<Videogioco[]>(this.apiUrl).pipe(
      map((list) => {
        return list.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        });
      })
    );
  }

  getVideogioco(id: string) {
    return this.http.get<Videogioco>(`${this.apiUrl}/${id}`, {});
  }

  filterVideogiochiByCategoria(categoria: string): Observable<any> {
    // console.log(categoria);

    return this.getVideogiochi().pipe(
      map((fullList) =>
        fullList.filter(
          (obj) => obj.category.toLowerCase() == categoria.toLowerCase()
        )
      )
    );
  }
}
