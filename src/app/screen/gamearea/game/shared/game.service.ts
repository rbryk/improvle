import {Injectable} from '@angular/core';
import {ArtistService} from "./artist.service";
import {MatchType} from "./match-type";
import {artistType} from "./artistType";
import {ArtistState} from "./artist-state";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public readonly MAX_ARTISTS = 5;

  public currentInputArtist: number = 0;
  public emptyGuess = ['','','','',''];
  public currentGuess: artistType[] = Array(this.MAX_ARTISTS).fill(ArtistState.dummy());

  constructor(private artistService: ArtistService) { }

  public addArtistToGuess(artist: number) {
    if (this.currentInputArtist < this.MAX_ARTISTS) {
      this.currentGuess[this.currentInputArtist] = this.artistService.get(artist);
      this.currentInputArtist++;
    }
  }

  public getArtistForKey(key: number)
  {
    return this.artistService.get((key));
  }

  public getMatchTypeForKey(key: number): MatchType
  {
    switch (key) {
      case 1:
        return MatchType.Match;
      case 2:
        return MatchType.Partial;
      case 3:
        return MatchType.Miss;
    }
    return MatchType.None;
  }
}
