import { Component, OnInit } from '@angular/core';
import {GameService} from "../shared/game.service";

@Component({
  selector: 'app-game-status-bar',
  templateUrl: './game-status-bar.component.html',
  styleUrls: ['./game-status-bar.component.scss']
})
export class GameStatusBarComponent implements OnInit {

  constructor(public game: GameService) { }

  ngOnInit(): void {
  }

}
