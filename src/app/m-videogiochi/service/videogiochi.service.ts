import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Videogioco } from 'src/app/model/videogioco';

@Injectable({
  providedIn: 'root',
})
export class VideogiochiService {
  constructor(private http: HttpClient) {}

  private apiUrl =
    'https://project-works-rest-api.onrender.com/api/v1/GROUP-I/videogame';

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
      //   tap((list) => console.log(list))
    );
  }
}
