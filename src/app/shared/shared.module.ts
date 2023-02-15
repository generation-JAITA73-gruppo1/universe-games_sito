import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FilterAsideComponent } from './filter-aside/filter-aside.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, FilterAsideComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, HeaderComponent, FilterAsideComponent],
})
export class SharedModule {}
