import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { VideogiochiService } from 'src/app/m-videogiochi/service/videogiochi.service';
import { Recensione } from 'src/app/model/recensione';
import { Videogioco } from 'src/app/model/videogioco';
import { RecensioniService } from '../service/recensioni.service';

@Component({
  selector: 'app-dettaglio-recensioni',
  templateUrl: './dettaglio-recensioni.component.html',
  styleUrls: ['./dettaglio-recensioni.component.css'],
})
export class DettaglioRecensioniComponent {
  reviewDettaglio?: Recensione;
  reviews$!: Observable<Recensione[]>;
  relatedGame?: Videogioco;

  constructor(
    private recensioniwService: RecensioniService,
    private videogiochiService: VideogiochiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reviews$ = this.recensioniwService.getRecensioni();

    this.route.params
      .pipe(
        map((params) => params['id'] as string),

        switchMap((id) => this.recensioniwService.getRecensione(id))
      )
      .subscribe((recensione) => {
        this.reviewDettaglio = recensione;
        if (this.reviewDettaglio !== undefined) {
          this.videogiochiService
            .getVideogioco(this.reviewDettaglio.reviewedGame.id)
            .subscribe((videogioco) => {
              this.relatedGame = videogioco;
            });
        }
      });
  }
}
