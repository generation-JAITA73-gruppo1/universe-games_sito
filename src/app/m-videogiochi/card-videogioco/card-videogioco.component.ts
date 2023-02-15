import { Component, Input } from '@angular/core';
import { Videogioco } from 'src/app/model/videogioco';

@Component({
  selector: 'app-card-videogioco',
  templateUrl: './card-videogioco.component.html',
  styleUrls: ['./card-videogioco.component.css'],
})
export class CardVideogiocoComponent {
  @Input() gamesDettaglio?: Videogioco;
}
