import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaRecensioniComponent } from './lista-recensioni/lista-recensioni.component';
import { DettaglioRecensioniComponent } from './dettaglio-recensioni/dettaglio-recensioni.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MVideogiochiModule } from '../m-videogiochi/m-videogiochi.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListaRecensioniComponent, DettaglioRecensioniComponent],
  exports: [ListaRecensioniComponent, DettaglioRecensioniComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MVideogiochiModule,
    SharedModule,
  ],
})
export class MRecensioniModule {}
