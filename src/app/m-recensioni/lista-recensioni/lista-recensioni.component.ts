import { Component } from '@angular/core';
import { defaultUrlMatcher } from '@angular/router';
import { Observable } from 'rxjs';
import { Recensione } from 'src/app/model/recensione';
import { RecensioniService } from '../service/recensioni.service';

@Component({
  selector: 'app-lista-recensioni',
  templateUrl: './lista-recensioni.component.html',
  styleUrls: ['./lista-recensioni.component.css'],
})
export class ListaRecensioniComponent {
  reviews$!: Observable<Recensione[]>;

  sortTypeReceived?: string;

  constructor(private recensioniService: RecensioniService) {}

  ngOnInit(): void {
    this.reviews$ = this.recensioniService.getRecensioni();
  }

  sortBy(sortType: string) {
    switch (sortType) {
      case '':
        console.log('trovato date');
        this.reviews$ = this.recensioniService.getRecensioni();
        break;
      default:
        this.reviews$ = this.recensioniService.sortRecensioniBy(sortType);
        break;
    }
  }
}
