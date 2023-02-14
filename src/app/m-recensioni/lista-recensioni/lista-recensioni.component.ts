import { Component } from '@angular/core';
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

  constructor(private recensioniService: RecensioniService) {}

  ngOnInit(): void {
    this.reviews$ = this.recensioniService.getRecensioni();
  }
}
