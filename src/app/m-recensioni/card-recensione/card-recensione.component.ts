import { Component, Input } from '@angular/core';
import { ReviewedGame } from 'src/app/model/recensione';

@Component({
  selector: 'app-card-recensione',
  templateUrl: './card-recensione.component.html',
  styleUrls: ['./card-recensione.component.css'],
})
export class CardRecensioneComponent {
  @Input() id?: string;
  @Input() title?: string;
  @Input() publicationDate?: Date;
  @Input() content?: string;
  @Input() score?: number;
  @Input() imageUrls?: string[];
  @Input() reviewedGame?: ReviewedGame;
}
