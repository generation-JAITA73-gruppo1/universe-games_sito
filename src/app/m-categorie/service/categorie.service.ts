import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Categoria } from 'src/app/model/categoria';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  private apiUrl = 'http://localhost:3000/category';

  constructor(private http: HttpClient) {}

  getCategorie(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl);
  }
  getCategoria(id: string) {
    return this.http.get<Categoria>(`${this.apiUrl}/${id}`, {});
  }

  readonly categorieNames$: Observable<string[]> = this.getCategorie().pipe(
    map((list) => list.map((obj) => obj.name).sort())
  );
}
