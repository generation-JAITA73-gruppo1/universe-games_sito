import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-chip',
  templateUrl: './tag-chip.component.html',
  styleUrls: ['./tag-chip.component.css'],
})
export class TagChipComponent {
  @Input() tagText!: string;
  @Input() tagLink!: string;
}
