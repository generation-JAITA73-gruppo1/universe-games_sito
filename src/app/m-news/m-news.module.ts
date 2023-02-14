import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListaNewsComponent } from './lista-news/lista-news.component';
import { OverviewNewsComponent } from './overview-news/overview-news.component';
import { DettaglioNewsComponent } from './dettaglio-news/dettaglio-news.component';
import { CardNewsComponent } from './card-news/card-news.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ListaNewsComponent,
    OverviewNewsComponent,
    DettaglioNewsComponent,
    CardNewsComponent,
  ],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [
    ListaNewsComponent,
    OverviewNewsComponent,
    DettaglioNewsComponent,
    CardNewsComponent,
  ],
})
export class MNewsModule {}
