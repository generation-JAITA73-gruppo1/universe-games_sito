import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Selezione } from 'src/app/model/filterSelection';
import { Videogioco } from 'src/app/model/videogioco';
import { VideogiochiService } from '../service/videogiochi.service';

@Component({
  selector: 'app-lista-videogiochi',
  templateUrl: './lista-videogiochi.component.html',
  styleUrls: ['./lista-videogiochi.component.css'],
})
export class ListaVideogiochiComponent implements OnInit, OnDestroy {
  games!: Videogioco[];
  filterSubscription!: Subscription;
  filterTypes: Selezione = {
    categories: true,
    newsAuthorName: false,
    reviewAuthorName: false,
    tag: false,
    gameid: false,
  };
  selectedCategoryFilter: string = '';

  constructor(private videogiochiService: VideogiochiService) {}

  ngOnInit(): void {
    this.videogiochiService
      .getVideogiochi()
      .subscribe((list) => (this.games = list));
  }

  filterListByCategoria(selectedCategory: string) {
    if (selectedCategory === '') {
      this.videogiochiService
        .getVideogiochi()
        .subscribe((list) => (this.games = list));
      this.selectedCategoryFilter = selectedCategory;
    } else {
      this.filterSubscription = this.videogiochiService
        .filterVideogiochiByCategoria(selectedCategory)
        .subscribe((list) => {
          this.games = list;
          this.selectedCategoryFilter = selectedCategory;
        });
    }
  }

  ngOnDestroy(): void {
    if (this.filterSubscription != undefined) {
      this.filterSubscription.unsubscribe();
    }
    this.selectedCategoryFilter !== '';
  }
}
