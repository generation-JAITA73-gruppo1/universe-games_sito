import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css'],
})
export class CardNewsComponent {
  @Input() id?: string;
  @Input() title?: string;
  @Input() category?: string;
  @Input() imageUrl?: string;
  @Input() content?: string;
  @Input() publicationDate?: Date;
  @Input() authorName?: string;
  @Input() tags?: string[];
}
