import { DOCUMENT } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CategorieService } from 'src/app/m-categorie/service/categorie.service';
import { NewsService } from 'src/app/m-news/service/news.service';
import { RecensioniService } from 'src/app/m-recensioni/service/recensioni.service';
import { ChosenFilter, Selezione } from 'src/app/model/filterTypes';
import { ReviewedGame } from 'src/app/model/recensione';
import { FilterService } from '../service/filter.service';

@Component({
  selector: 'app-filter-aside',
  templateUrl: './filter-aside.component.html',
  styleUrls: ['./filter-aside.component.css'],
})
export class FilterAsideComponent implements OnInit, OnDestroy {
  @Input() filterTypes!: Selezione;
  showAside: boolean = false;

  //all the filter type variables
  // --> Categorie
  categoriesList!: string[];
  categorySubscription!: Subscription;

  // --> Autore News
  authorNamesList!: string[];
  authorSubscription!: Subscription;

  // --> Tags
  tagList!: string[];
  tagSubscription!: Subscription;

  // --> Autore recensioni
  reviewerList!: string[];
  reviewerSubscription!: Subscription;

  // --> Id del gioco recensito
  gameList!: ReviewedGame[];
  gameListSubscription!: Subscription;

  //proprietà per il toggle nel template
  showCategoryList: boolean = false;
  showNewsAuthorList: boolean = false;
  showTagList: boolean = false;
  showReviewerList: boolean = false;
  showGameList: boolean = false;

  isSelected: boolean = false;

  // L'oggetto che contiene i filtri
  filters: ChosenFilter = {
    categories: null,
    newsAuthorName: null,
    reviewerName: null,
    tag: null,
    reviewedGame: null,
  };

  constructor(
    private categoryservice: CategorieService,
    private newsService: NewsService,
    private filtersService: FilterService,
    private reviewService: RecensioniService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    //recupero i dati delle categorie
    if (this.filterTypes.categories) {
      this.categorySubscription =
        this.categoryservice.categorieNames$.subscribe(
          (list) => (this.categoriesList = list)
        );
    }

    //recupero i dati dell'autore
    if (this.filterTypes.newsAuthorName) {
      this.authorSubscription = this.newsService.authorNameList$.subscribe(
        (list) => (this.authorNamesList = list)
      );
    }

    //recupero la lista dei tag
    if (this.filterTypes.tag) {
      this.tagSubscription = this.newsService.tagList$.subscribe(
        (list) => (this.tagList = list)
      );
    }

    //recupero la lista dei recensori
    if (this.filterTypes.reviewerName) {
      this.reviewerSubscription =
        this.reviewService.reviewerNamesList$.subscribe(
          (list) => (this.reviewerList = list)
        );
    }

    //recupero la lista dei nomi dei giochi
    if (this.filterTypes.reviewedGame) {
      this.gameListSubscription =
        this.reviewService.reviewedGamesList$.subscribe(
          (list) => (this.gameList = list)
        );
    }
  }

  noSelectedFilters(): boolean {
    return Object.values(this.filters).every((x) => x == null);
  }

  get filterValues(): Array<string> {
    return Object.values(this.filters)
      .filter((x) => x != null)
      .map((x) => {
        if (x.hasOwnProperty('name')) return x.name;
        else return x;
      });
  }

  toggleAside() {
    this.showAside = !this.showAside;
  }

  selectFilter() {
    // console.log(this.filters);
    this.filtersService.changeFilter(this.filters);
  }

  higlightSelectedCategory(index: number) {
    const iteration = this.document.querySelector('#category' + index);
    const allOtherIterations = this.document.querySelectorAll(
      '.category-list .selected'
    );

    if (allOtherIterations != null)
      for (let i = 0; i < allOtherIterations.length; i++) {
        allOtherIterations[i].classList.remove('selected');
        const nonSelectedCheckbox = allOtherIterations[i].querySelector(
          'input'
        ) as HTMLInputElement;
        nonSelectedCheckbox.checked = false;
      }

    if (iteration != null) {
      iteration.classList.toggle('selected');
      const iterationCheckbox = iteration.querySelector(
        'input'
      ) as HTMLInputElement;
      iterationCheckbox.checked = true;
    }
  }

  higlightSelectedNewsAuthor(index: number) {
    const iteration = this.document.querySelector('#author' + index);
    const allOtherIterations = this.document.querySelectorAll(
      '.news-author-list .selected'
    );

    if (allOtherIterations != null)
      for (let i = 0; i < allOtherIterations.length; i++) {
        allOtherIterations[i].classList.remove('selected');
        const nonSelectedCheckbox = allOtherIterations[i].querySelector(
          'input'
        ) as HTMLInputElement;
        nonSelectedCheckbox.checked = false;
      }

    if (iteration != null) {
      iteration.classList.toggle('selected');
      const iterationCheckbox = iteration.querySelector(
        'input'
      ) as HTMLInputElement;
      iterationCheckbox.checked = true;
    }
  }

  higlightSelectedTag(index: number) {
    const iteration = this.document.querySelector('#tag' + index);
    const allOtherIterations = this.document.querySelectorAll(
      '.tag-list .selected'
    );

    if (allOtherIterations != null)
      for (let i = 0; i < allOtherIterations.length; i++) {
        allOtherIterations[i].classList.remove('selected');
        const nonSelectedCheckbox = allOtherIterations[i].querySelector(
          'input'
        ) as HTMLInputElement;
        nonSelectedCheckbox.checked = false;
      }

    if (iteration != null) {
      iteration.classList.toggle('selected');
      const iterationCheckbox = iteration.querySelector(
        'input'
      ) as HTMLInputElement;
      iterationCheckbox.checked = true;
    }
  }

  higlightSelectedReviewer(index: number) {
    const iteration = this.document.querySelector('#reviewer' + index);
    const allOtherIterations = this.document.querySelectorAll(
      '.reviewer-list .selected'
    );

    if (allOtherIterations != null)
      for (let i = 0; i < allOtherIterations.length; i++) {
        allOtherIterations[i].classList.remove('selected');
        const nonSelectedCheckbox = allOtherIterations[i].querySelector(
          'input'
        ) as HTMLInputElement;
        nonSelectedCheckbox.checked = false;
      }

    if (iteration != null) {
      iteration.classList.toggle('selected');
      const iterationCheckbox = iteration.querySelector(
        'input'
      ) as HTMLInputElement;
      iterationCheckbox.checked = true;
    }
  }

  higlightSelectedReviewedreviewedGame(index: number) {
    const iteration = this.document.querySelector('#reviewed-game' + index);
    const allOtherIterations = this.document.querySelectorAll(
      '.reviewed-game-list .selected'
    );

    if (allOtherIterations != null)
      for (let i = 0; i < allOtherIterations.length; i++) {
        allOtherIterations[i].classList.remove('selected');
        const nonSelectedCheckbox = allOtherIterations[i].querySelector(
          'input'
        ) as HTMLInputElement;
        nonSelectedCheckbox.checked = false;
      }

    if (iteration != null) {
      iteration.classList.toggle('selected');
      const iterationCheckbox = iteration.querySelector(
        'input'
      ) as HTMLInputElement;
      iterationCheckbox.checked = true;
    }
  }

  ngOnDestroy(): void {
    if (this.categorySubscription != undefined)
      this.categorySubscription.unsubscribe();

    if (this.authorSubscription != undefined)
      this.authorSubscription.unsubscribe();

    if (this.tagSubscription != undefined) this.tagSubscription.unsubscribe();

    if (this.reviewerSubscription != undefined)
      this.reviewerSubscription.unsubscribe();

    if (this.gameListSubscription != undefined)
      this.gameListSubscription.unsubscribe();

    this.showCategoryList = false;
    this.showNewsAuthorList = false;

    this.filtersService.resetFilters();
  }
}
