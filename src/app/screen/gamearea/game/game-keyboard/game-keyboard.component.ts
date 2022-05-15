import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-keyboard',
  templateUrl: './game-keyboard.component.html',
  styleUrls: ['./game-keyboard.component.scss']
})
export class GameKeyboardComponent implements OnInit {

  public selected: number|null = null;

  @Output() profileChosen: EventEmitter<number | null> =
      new EventEmitter<number | null>();

  constructor() { }

  ngOnInit(): void {
  }

  onKeyClicked($event: number) {
    this.selected = $event;
  }

  onProfileChosen($event: number | null) {
    this.selected = null;
    this.profileChosen.emit($event);
  }
}
