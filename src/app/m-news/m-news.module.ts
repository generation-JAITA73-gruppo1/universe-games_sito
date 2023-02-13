import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListaNewsComponent } from './lista-news/lista-news.component';
import { OverviewNewsComponent } from './overview-news/overview-news.component';
import { DettaglioNewsComponent } from './dettaglio-news/dettaglio-news.component';

@NgModule({
  declarations: [
    ListaNewsComponent,
    OverviewNewsComponent,
    DettaglioNewsComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [ListaNewsComponent, OverviewNewsComponent, DettaglioNewsComponent],
})
export class MNewsModule {}
