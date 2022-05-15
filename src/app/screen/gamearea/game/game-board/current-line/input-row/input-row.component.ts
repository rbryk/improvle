import { Component, OnInit } from '@angular/core';
import {GameService} from "../../../shared/game.service";

@Component({
  selector: 'app-input-row',
  templateUrl: './input-row.component.html',
  styleUrls: ['./input-row.component.scss']
})
export class InputRowComponent implements OnInit {

  constructor(public game: GameService) { }

  ngOnInit(): void {
  }

}
