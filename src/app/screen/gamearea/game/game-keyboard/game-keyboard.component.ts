import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {GameService} from "../shared/game.service";

@Component({
  selector: 'app-game-keyboard',
  templateUrl: './game-keyboard.component.html',
  styleUrls: ['./game-keyboard.component.scss']
})
export class GameKeyboardComponent implements OnInit {

  public selected: number|null = null;

  @Output() profileChosen: EventEmitter<number | null> =
      new EventEmitter<number | null>();

  @Output() backspaceClicked: EventEmitter<boolean> =
      new EventEmitter<boolean>();

  @Output() checkClicked: EventEmitter<boolean> =
      new EventEmitter<boolean>();

  constructor(public game: GameService) { }

  public getRow(num: number): number[] {
     switch (num) {
       case 1: return this.game.keyboard.slice(0, 6);
       case 2: return this.game.keyboard.slice(6, 11);
       case 3: return this.game.keyboard.slice(11, 17);
       case 4: return this.game.keyboard.slice(17, 20);
     }
     return [];
  }

  ngOnInit(): void {
  }

  onBackspaceClicked($event: boolean) {
    this.backspaceClicked.emit($event);
  }

  onCheckClicked($event: boolean) {
    this.checkClicked.emit($event);
  }

  onKeyClicked($event: number) {
    this.profileChosen.emit($event);
    // if (!this.selected) {
    //   this.selected = $event;
    // }
  }

  onProfileChosen($event: number | null) {
    // this.selected = null;
    this.profileChosen.emit($event);
  }
}
