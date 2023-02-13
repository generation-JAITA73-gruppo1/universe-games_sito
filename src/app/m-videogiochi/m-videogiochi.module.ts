import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardVideogiocoComponent } from './card-videogioco/card-videogioco.component';
import { ListaVideogiochiComponent } from './lista-videogiochi/lista-videogiochi.component';
import { DettaglioVideogiocoComponent } from './dettaglio-videogioco/dettaglio-videogioco.component';

@NgModule({
  declarations: [
    CardVideogiocoComponent,
    ListaVideogiochiComponent,
    DettaglioVideogiocoComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardVideogiocoComponent,
    ListaVideogiochiComponent,
    DettaglioVideogiocoComponent,
  ],
})
export class MVideogiochiModule {}
