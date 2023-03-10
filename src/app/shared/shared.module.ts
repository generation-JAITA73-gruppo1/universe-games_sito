import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FilterAsideComponent } from './filter-aside/filter-aside.component';
import { TagChipComponent } from './tag-chip/tag-chip.component';
import { SeeMoreButtonComponent } from './see-more-button/see-more-button.component';
import { CardRecensioneComponent } from './card-recensione/card-recensione.component';
import { CardVideogiocoComponent } from './card-videogioco/card-videogioco.component';
import { SortbarComponent } from './sortbar/sortbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    FilterAsideComponent,
    TagChipComponent,
    SeeMoreButtonComponent,
    CardRecensioneComponent,
    CardVideogiocoComponent,
    SortbarComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    FilterAsideComponent,
    TagChipComponent,
    SeeMoreButtonComponent,
    CardRecensioneComponent,
    CardVideogiocoComponent,
    SortbarComponent,
  ],
})
export class SharedModule {}
