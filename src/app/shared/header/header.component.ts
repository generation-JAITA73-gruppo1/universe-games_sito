import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isSbinnable = false;

  constructor(private router: Router) {}

  sbin() {
    this.isSbinnable = true;
    this.router.navigateByUrl('/');
    setTimeout(() => {
      this.isSbinnable = false;
    }, 1500);
  }
}
