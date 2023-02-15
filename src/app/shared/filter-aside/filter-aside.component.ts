import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CategorieService } from 'src/app/m-categorie/service/categorie.service';
import { NewsService } from 'src/app/m-news/service/news.service';
import { RecensioniService } from 'src/app/m-recensioni/service/recensioni.service';
import { Selezione } from 'src/app/model/filterSelection';

@Component({
  selector: 'app-filter-aside',
  templateUrl: './filter-aside.component.html',
  styleUrls: ['./filter-aside.component.css'],
})
export class FilterAsideComponent implements OnInit, OnDestroy {
  @Output() selectedFilter = new EventEmitter<string>();
  @Input() filterTypes!: Selezione;
  showAside: boolean = false;
  categoriesList!: string[];
  categorySubscription!: Subscription;
  //   authorNamesList!: string[];
  //   authorSubscription!: Subscription;

  constructor(
    private categoryservice: CategorieService // private notizieService: NewsService, // private recensioniService: RecensioniService
  ) {}

  ngOnInit(): void {
    if (this.filterTypes.categories) {
      this.categorySubscription =
        this.categoryservice.categorieNames$.subscribe(
          (list) => (this.categoriesList = list)
        );
    }
  }

  toggleAside() {
    this.showAside = !this.showAside;
  }

  selectFilter(filter: string) {
    this.selectedFilter.next(filter);
  }

  ngOnDestroy(): void {
    this.categorySubscription.unsubscribe;
  }
}
