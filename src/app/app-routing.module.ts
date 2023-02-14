import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MNewsModule } from './m-news/m-news.module';
import { DettaglioComponent } from './pages/dettaglio/dettaglio.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'lista/:cat_name',
    component: HomepageComponent,
  },
  {
    path: 'dettaglio/:cat_name/:id',
    component: DettaglioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
