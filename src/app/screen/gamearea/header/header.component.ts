import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GameService} from "../game/shared/game.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() menuClicked: EventEmitter<string> =
      new EventEmitter<string>();

  constructor(public game:GameService, public _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  clickMenu() {
    this.menuClicked.emit('');
  }

  toggleEasyMode() {
    this.game.toggleEasyMode();
    let message = 'Easy mode ' + (this.game.easyMode ? 'ON' : 'OFF');
    this._snackBar.open(message, undefined, {
      duration: 1500
    });
  }

}
