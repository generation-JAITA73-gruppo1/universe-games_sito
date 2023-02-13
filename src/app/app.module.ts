import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DettaglioComponent } from './pages/dettaglio/dettaglio.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { MVideogiochiModule } from './m-videogiochi/m-videogiochi.module';
import { MNewsModule } from './m-news/m-news.module';
import { MRecensioniModule } from './m-recensioni/m-recensioni.module';

@NgModule({
  declarations: [AppComponent, HomepageComponent, DettaglioComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    MVideogiochiModule,
    MNewsModule,
    MRecensioniModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
