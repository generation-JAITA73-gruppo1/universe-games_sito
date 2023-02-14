import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Videogioco } from 'src/app/model/videogioco';
import { VideogiochiService } from '../service/videogiochi.service';

@Component({
  selector: 'app-lista-videogiochi',
  templateUrl: './lista-videogiochi.component.html',
  styleUrls: ['./lista-videogiochi.component.css'],
})
export class ListaVideogiochiComponent {
  games$!: Observable<Videogioco[]>;

  constructor(private videogiochiService: VideogiochiService) {}

  ngOnInit(): void {
    this.games$ = this.videogiochiService.getVideogiochi();
  }
}
