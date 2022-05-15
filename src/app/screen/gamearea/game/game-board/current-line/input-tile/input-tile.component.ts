import {Component, Input, OnInit} from '@angular/core';
import {artistType} from "../../../shared/artistType";
import {ArtistState} from "../../../shared/artist-state";
import {GameService} from "../../../shared/game.service";

@Component({
  selector: 'app-input-tile',
  templateUrl: './input-tile.component.html',
  styleUrls: ['./input-tile.component.scss']
})
export class InputTileComponent implements OnInit {

  @Input() artist: artistType = ArtistState.dummy();
  @Input() number: number = -1;

  constructor(public game: GameService) { }

  ngOnInit(): void {
  }

}
