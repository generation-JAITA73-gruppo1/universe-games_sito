import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardVideogiocoComponent } from '../shared/card-videogioco/card-videogioco.component';
import { ListaVideogiochiComponent } from './lista-videogiochi/lista-videogiochi.component';
import { DettaglioVideogiocoComponent } from './dettaglio-videogioco/dettaglio-videogioco.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListaVideogiochiComponent, DettaglioVideogiocoComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, SharedModule],
  exports: [ListaVideogiochiComponent, DettaglioVideogiocoComponent],
})
export class MVideogiochiModule {}
