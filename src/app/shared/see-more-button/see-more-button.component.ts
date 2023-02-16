import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-see-more-button',
  templateUrl: './see-more-button.component.html',
  styleUrls: ['./see-more-button.component.css'],
})
export class SeeMoreButtonComponent {
  @Input() link!: string;
  @Input() text!: string;
}
