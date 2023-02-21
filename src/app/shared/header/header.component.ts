import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isSbinnable = false;
  ding = new Audio();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.ding.src = '/assets/sounds/coin_sound.mp3';
    this.ding.load();
  }

  sbin() {
    this.isSbinnable = true;
    this.playDing();
    this.router.navigateByUrl('/');
    setTimeout(() => {
      this.isSbinnable = false;
    }, 1500);
  }

  playDing() {
    this.ding.play();
  }
}
