import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameService} from "../../shared/game.service";
import {artistType} from "../../shared/artistType";

@Component({
  selector: 'app-keyboard-selection',
  templateUrl: './keyboard-selection.component.html',
  styleUrls: ['./keyboard-selection.component.scss', '../keyboard-tile/keyboard-tile.component.scss']
})
export class KeyboardSelectionComponent implements OnInit {

  @Input() key: number = 0;

  @Output() profileChosen: EventEmitter<number | null> =
      new EventEmitter<number | null>();

  public artist: artistType | undefined;

  constructor(public game: GameService) { }

  ngOnInit(): void {
    //this.artist = this.game.getArtistForKey(this.key)
  }

  ngOnChanges(): void {
    this.artist = this.game.getArtistForKey(this.key)
  }

  onProfileSelected() {
    this.profileChosen.emit(this.key);
  }

  onProfileCancel() {
    this.profileChosen.emit(null);
  }

}
