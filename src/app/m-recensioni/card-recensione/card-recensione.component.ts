import { Component, Input } from '@angular/core';
import { Recensione } from 'src/app/model/recensione';

@Component({
  selector: 'app-card-recensione',
  templateUrl: './card-recensione.component.html',
  styleUrls: ['./card-recensione.component.css'],
})
export class CardRecensioneComponent {
  @Input() reviewDettaglio?: Recensione;
}
