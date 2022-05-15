import {Component, Input, OnInit} from '@angular/core';
import {MatchType} from "../../../shared/match-type";
import {ArtistState} from "../../../shared/artist-state";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() artistWithState : ArtistState = new ArtistState(ArtistState.dummy(), MatchType.None);

  constructor() { }

  ngOnInit(): void {
  }

}
