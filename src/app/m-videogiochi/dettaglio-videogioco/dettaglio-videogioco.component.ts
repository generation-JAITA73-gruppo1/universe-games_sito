import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { RecensioniService } from 'src/app/m-recensioni/service/recensioni.service';
import { Recensione } from 'src/app/model/recensione';
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
  relatedReview?: Recensione[];

  constructor(
    private videogiocoService: VideogiochiService,
    private recensioniService: RecensioniService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.games$ = this.videogiocoService.getVideogiochi();

    this.route.params
      .pipe(
        map((params) => params['id'] as string),

        switchMap((id) => this.videogiocoService.getVideogioco(id))
      )
      .subscribe((gioco) => {
        this.gamesDettaglio = gioco;

        if (this.gamesDettaglio !== undefined) {
          this.recensioniService
            .getRecensioniByGameId(this.gamesDettaglio._id)
            .subscribe((recensione) => {
              this.relatedReview = recensione;
            });
        }
      });
  }
}
