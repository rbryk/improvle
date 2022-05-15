import {Component, OnInit} from '@angular/core';
import {ArtistState} from "../shared/artist-state";
import {MatchType} from "../shared/match-type";
import {ArtistService} from "../shared/artist.service";

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  public guess: ArtistState[] = [
    {artist: this.artistService.get(0), matchType: MatchType.Match},
    {artist: this.artistService.get(1), matchType: MatchType.Partial},
    {artist: this.artistService.get(2), matchType: MatchType.Miss},
    {artist: this.artistService.get(3), matchType: MatchType.Match},
    {artist: this.artistService.get(4), matchType: MatchType.Partial},
  ]

  constructor(public artistService: ArtistService) { }

  ngOnInit(): void {
  }

}
