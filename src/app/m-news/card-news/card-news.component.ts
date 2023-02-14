import { Component, Input } from '@angular/core';
import { Notizia } from 'src/app/model/notizia';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css'],
})
export class CardNewsComponent {
  @Input() newsDettaglio?: Notizia;

  test() {
    console.log('click');
  }
}
