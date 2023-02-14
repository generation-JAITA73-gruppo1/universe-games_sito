import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Recensione } from 'src/app/model/recensione';

@Injectable({
  providedIn: 'root',
})
export class RecensioniService {
  private apiUrl =
    'https://project-works-rest-api.onrender.com/api/v1/GROUP-I/review';

  constructor(private http: HttpClient) {}

  private recensioneSubject = new Subject<Recensione[]>();

  private recensione: Recensione[] = [];

  getRecensioni(): Observable<Recensione[]> {
    return this.http.get<Recensione[]>(this.apiUrl);
  }
  getRecensione(id: string) {
    return this.http.get<Recensione>(`${this.apiUrl}/${id}`, {});
  }
}
