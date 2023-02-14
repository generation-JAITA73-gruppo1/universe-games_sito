import { Component, Input } from '@angular/core';
import { Lingua } from 'src/app/model/videogioco';

@Component({
  selector: 'app-card-videogioco',
  templateUrl: './card-videogioco.component.html',
  styleUrls: ['./card-videogioco.component.css'],
})
export class CardVideogiocoComponent {
  @Input() id?: string;
  @Input() title?: string;
  @Input() category?: string;
  @Input() releaseDate?: Date;
  @Input() genre?: string;
  @Input() softwareHouse?: string;
  @Input() publisher?: string;
  @Input() numberOfPlayers?: number;
  @Input() languages!: Lingua;
  @Input() coverImage?: string;
}
