import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/model/categoria';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  private apiUrl =
    'https://project-works-rest-api.onrender.com/api/v1/GROUP-I/category';

  constructor(private http: HttpClient) {}

  getCategorie(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl);
  }
  getCategoria(id: string) {
    return this.http.get<Categoria>(`${this.apiUrl}/${id}`, {});
  }
}
