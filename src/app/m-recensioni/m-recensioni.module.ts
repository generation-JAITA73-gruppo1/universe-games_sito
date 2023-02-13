import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaRecensioniComponent } from './lista-recensioni/lista-recensioni.component';
import { DettaglioRecensioniComponent } from './dettaglio-recensioni/dettaglio-recensioni.component';
import { CardRecensioneComponent } from './card-recensione/card-recensione.component';

@NgModule({
  declarations: [
    ListaRecensioniComponent,
    DettaglioRecensioniComponent,
    CardRecensioneComponent,
  ],
  imports: [CommonModule],
  exports: [
    ListaRecensioniComponent,
    DettaglioRecensioniComponent,
    CardRecensioneComponent,
  ],
})
export class MRecensioniModule {}
