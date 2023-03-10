import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notizia } from 'src/app/model/notizia';
import { map, Observable, Subject, tap } from 'rxjs';
import { ChosenFilter } from 'src/app/model/filterTypes';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = 'http://localhost:3000/news';

  constructor(private http: HttpClient) {}

  getNews(): Observable<Notizia[]> {
    return this.http.get<Notizia[]>(this.apiUrl).pipe(
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
  getNewsId(id: string) {
    return this.http.get<Notizia>(`${this.apiUrl}/${id}`, {});
  }

  filterNewsBy(filters: ChosenFilter): Observable<Notizia[]> {
    // console.log(categoria);

    const filteredList$: Observable<Notizia[]> = this.getNews().pipe(
      map((fullList) => {
        if (filters.categories !== null) {
          return fullList.filter(
            (obj) =>
              obj.category.toLowerCase() == filters.categories!.toLowerCase()
          );
        } else return fullList;
      }),
      map((fullList) => {
        if (filters.newsAuthorName !== null) {
          return fullList.filter(
            (obj) =>
              obj.authorName.toLowerCase() ==
              filters.newsAuthorName!.toLowerCase()
          );
        } else return fullList;
      }),

      map((fullList) => {
        if (filters.tag != null) {
          return fullList.filter((obj) => {
            // VECCHIA VERSIONE: aveva il problema che ritornava solo l'ultimo valore del loop
            //                   mentre se non davo nessun return esplicito non ritornava nulla
            // let value;
            // for (let t of obj.tags) {
            //   value = t.toLowerCase() == filters.tag!.toLowerCase();
            // }
            // console.log(obj.title.substring(0, 10) + ' ' + value);
            // return value;
            //
            //
            // SOLUZIONE 1: definisco un boolean che diventa vero se almeno uno dei tag è uguale al filtro
            // let bool = false;
            // for (let t of obj.tags) {
            //   if (t.toLowerCase() == filters.tag!.toLowerCase()) bool = true;
            // }
            // return bool;
            //
            //
            // SOLUZIONE 2: utilizzo il fantastico metodo "some()", che riduce i valori in una stringa e mi dà già la truthiness
            //
            return obj.tags.some(
              (t) => t.toLowerCase() === filters.tag?.toLowerCase()
            );
          });
        } else return fullList;
      })
    );

    return filteredList$;
  }

  readonly authorNameList$: Observable<string[]> = this.getNews().pipe(
    map((list: Notizia[]) => {
      let authorList: string[] = [];

      for (let l of list) {
        if (!authorList.includes(l.authorName)) {
          authorList.push(l.authorName);
        }
      }

      return authorList.sort();
    })

    // DEBUG
    // tap((list) => console.log(list))
  );

  readonly tagList$: Observable<string[]> = this.getNews().pipe(
    map((list) => {
      let tagList: string[] = [];
      for (let l of list) {
        for (let t of l.tags) {
          if (!tagList.includes(t.toUpperCase())) tagList.push(t.toUpperCase());
        }
      }

      return tagList.sort();
    })
  );
}
