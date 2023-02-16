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
    this.playDing();
    this.router.navigateByUrl('/');
    setTimeout(() => {
      this.isSbinnable = false;
    }, 1500);
  }

  playDing() {
    let audio = new Audio();
    audio.src = '/assets/sounds/coin_sound.mp3';
    audio.load();
    audio.play();
  }
}
