import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FilterAsideComponent } from './filter-aside/filter-aside.component';
import { TagChipComponent } from './tag-chip/tag-chip.component';
import { SeeMoreButtonComponent } from './see-more-button/see-more-button.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    FilterAsideComponent,
    TagChipComponent,
    SeeMoreButtonComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    FilterAsideComponent,
    TagChipComponent,
  ],
})
export class SharedModule {}
