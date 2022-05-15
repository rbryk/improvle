import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-keyboard',
  templateUrl: './game-keyboard.component.html',
  styleUrls: ['./game-keyboard.component.scss']
})
export class GameKeyboardComponent implements OnInit {

  public selected: number|null = null;

  constructor() { }

  ngOnInit(): void {
  }

  onKeyClicked($event: number) {
    this.selected = $event;
  }

  onProfileChosen($event: number | null) {
    this.selected = null;
  }
}
