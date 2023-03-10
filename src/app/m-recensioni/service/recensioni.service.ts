import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';
import { ChosenFilter } from 'src/app/model/filterTypes';
import { Recensione, ReviewedGame } from 'src/app/model/recensione';

@Injectable({
  providedIn: 'root',
})
export class RecensioniService {
  private apiUrl = 'http://localhost:3000/review';

  constructor(private http: HttpClient) {}

  private recensioneSubject = new Subject<Recensione[]>();

  private recensione: Recensione[] = [];

  getRecensioni(): Observable<Recensione[]> {
    return this.http.get<Recensione[]>(this.apiUrl).pipe(
      map((list) => {
        return list.sort((a, b) => {
          const dt1: any = new Date(a.publicationDate);
          const dt2: any = new Date(b.publicationDate);
          console.log('done');
          return dt2 - dt1;
        });
      })
    );
  }
  getRecensione(id: string) {
    return this.http.get<Recensione>(`${this.apiUrl}/${id}`, {});
  }

  getRecensioniByreviewedGame(videogiocoId: string): Observable<any> {
    return this.getRecensioni().pipe(
      map((fullList) =>
        fullList.filter(
          (obj) =>
            obj.reviewedGame.id.toLowerCase() == videogiocoId.toLowerCase()
        )
      ),
      tap((list) => console.log(list))
    );
  }

  filterReviewsBy(filters: ChosenFilter): Observable<Recensione[]> {
    console.log(filters);

    const filteredList$: Observable<Recensione[]> = this.getRecensioni().pipe(
      map((fullList) => {
        if (filters.reviewerName !== null) {
          return fullList.filter(
            (obj) =>
              obj.reviewerName.toLowerCase() ==
              filters.reviewerName?.toLowerCase()
          );
        } else return fullList;
      }),
      map((fullList) => {
        if (filters.reviewedGame !== null) {
          return fullList.filter(
            (obj) =>
              obj.reviewedGame.id.toLowerCase() ==
              filters.reviewedGame?.id.toLowerCase()
          );
        } else return fullList;
      })
    );

    return filteredList$;
  }

  reviewerNamesList$: Observable<string[]> = this.getRecensioni().pipe(
    map((list) => {
      let reviewerList: string[] = [];

      for (let l of list) {
        if (!reviewerList.includes(l.reviewerName)) {
          reviewerList.push(l.reviewerName);
        }
      }

      return reviewerList.sort();
    })
  );

  reviewedGamesList$: Observable<ReviewedGame[]> = this.getRecensioni().pipe(
    map((list) => {
      let reviewedGameList: ReviewedGame[] = [];

      for (let l of list) {
        if (
          reviewedGameList.findIndex((game) => game.id === l.reviewedGame.id) ==
          -1
        ) {
          reviewedGameList.push(l.reviewedGame);
        }
      }

      return reviewedGameList.sort((a, b) => {
        let titleA = a.name,
          titleB = b.name;

        if (titleA < titleB) return -1;
        if (titleA > titleB) return +1;
        return 0;
      });
    })
  );

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
