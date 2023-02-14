import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectParams } from 'src/app/model/selection';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css'],
})
export class DettaglioComponent {
  showDettaglioGames: boolean = false;
  showDettaglioNews: boolean = false;
  showDettaglioReviews: boolean = false;
  categoriaNotFound: boolean = false;

  constructor(
    private route: ActivatedRoute // @Inject(DOCUMENT) private document: Document
  ) {}

  //   scrollToTop(): void {
  //     return this.document.body.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //       inline: 'start',
  //     });
  //   }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const listaSelect: SelectParams = params['cat_name'];

      switch (listaSelect) {
        case 'games':
          this.showDettaglioGames = true;
          this.showDettaglioReviews = false;
          this.showDettaglioNews = false;
          break;
        case 'categories':
          this.showDettaglioGames = false;
          this.showDettaglioReviews = false;
          this.showDettaglioNews = false;
          break;
        case 'reviews':
          this.showDettaglioGames = false;
          this.showDettaglioReviews = true;
          this.showDettaglioNews = false;
          break;
        case 'news':
          this.showDettaglioGames = false;
          this.showDettaglioReviews = false;
          this.showDettaglioNews = true;
          break;
        default:
          this.categoriaNotFound = true;
          this.showDettaglioGames = false;
          this.showDettaglioReviews = false;
          this.showDettaglioNews = false;
      }
    });
  }

  ngOnDestroy() {
    this.categoriaNotFound = false;
    this.showDettaglioGames = false;
    this.showDettaglioReviews = false;
    this.showDettaglioNews = false;
  }
}
