import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardVideogiocoComponent } from './card-videogioco/card-videogioco.component';
import { ListaVideogiochiComponent } from './lista-videogiochi/lista-videogiochi.component';
import { DettaglioVideogiocoComponent } from './dettaglio-videogioco/dettaglio-videogioco.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CardVideogiocoComponent,
    ListaVideogiochiComponent,
    DettaglioVideogiocoComponent,
  ],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [
    CardVideogiocoComponent,
    ListaVideogiochiComponent,
    DettaglioVideogiocoComponent,
  ],
})
export class MVideogiochiModule {}
