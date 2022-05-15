import { Component, OnInit } from '@angular/core';
import {GameService} from "./shared/game.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(public game: GameService) { }

  ngOnInit(): void {
  }

  onProfileChosen($event: number | null) {
    if ($event !== null) {
      this.game.addArtistToGuess($event);
    }
  }

}
