import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';
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

  sortRecensioniBy(sortType: string): Observable<Recensione[]> {
    console.log(sortType);

    let sortedReviews$: Observable<Recensione[]>;

    switch (sortType) {
      //   case 'date':
      //     sortedReviews$ = this.getRecensioni().pipe(
      //       tap((completeList: any) => console.log(completeList)),
      //       map((completeList) =>
      //         completeList.sort(function (a: Recensione, b: Recensione) {
      //           const dataA: any = this.getTimo(a.publicationDate);
      //           const dataB: any = this.getTimo(b.publicationDate);
      //           return dataA - dataB;
      //         })
      //       ),
      //       tap((sortedList) => console.log('sorted' + sortedList))
      //     );
      //     break;
      default:
        sortedReviews$ = this.getRecensioni();
        break;
    }

    return sortedReviews$;
  }

  //   private getTimo(date?: Date): any {
  //     return date != null ? date.getTime() : 0;
  //   }
}
