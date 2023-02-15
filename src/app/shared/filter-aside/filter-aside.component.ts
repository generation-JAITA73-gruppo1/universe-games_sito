import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CategorieService } from 'src/app/m-categorie/service/categorie.service';

@Component({
  selector: 'app-filter-aside',
  templateUrl: './filter-aside.component.html',
  styleUrls: ['./filter-aside.component.css'],
})
export class FilterAsideComponent implements OnInit, OnDestroy {
  categoriesList!: string[];
  categorySubscription!: Subscription;
  showAside: boolean = false;
  @Output() selectedFilter = new EventEmitter<string>();

  constructor(private categoryservice: CategorieService) {}

  ngOnInit(): void {
    this.categorySubscription = this.categoryservice.categorieNames$.subscribe(
      (list) => (this.categoriesList = list)
    );
  }

  toggleAside() {
    this.showAside = !this.showAside;
  }

  filterSelect(filter: string) {
    this.selectedFilter.next(filter);
  }

  ngOnDestroy(): void {
    this.categorySubscription.unsubscribe;
  }
}
