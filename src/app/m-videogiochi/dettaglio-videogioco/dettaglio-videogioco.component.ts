import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Videogioco } from 'src/app/model/videogioco';
import { VideogiochiService } from '../service/videogiochi.service';

@Component({
  selector: 'app-dettaglio-videogioco',
  templateUrl: './dettaglio-videogioco.component.html',
  styleUrls: ['./dettaglio-videogioco.component.css'],
})
export class DettaglioVideogiocoComponent {
  gamesDettaglio?: Videogioco;
  games$!: Observable<Videogioco[]>;

  constructor(
    private newsService: VideogiochiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.games$ = this.newsService.getVideogiochi();

    this.route.params
      .pipe(
        map((params) => params['id'] as string),
        // switchMap è un operatore che serve a "cambiare l'observable con un altro"
        // viene utilizzato nei casi in cui voglio trasmettere dalla pipe un valore
        // che a sua volta arriva da un altro tubo
        switchMap((id) => this.newsService.getVideogioco(id))
      )
      .subscribe((gioco) => {
        this.gamesDettaglio = gioco;
      });
  }
}
