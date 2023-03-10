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
    return this.http.get<Videogioco[]>(this.apiUrl);
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
