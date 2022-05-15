import { Component, OnInit } from '@angular/core';
import {GameService} from "../../../shared/game.service";

@Component({
  selector: 'app-empty-row',
  templateUrl: './empty-row.component.html',
  styleUrls: ['./empty-row.component.scss']
})
export class EmptyRowComponent implements OnInit {


  constructor(public game: GameService) {
  }

  ngOnInit(): void {
  }

}
