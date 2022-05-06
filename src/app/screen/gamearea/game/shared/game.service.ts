import {Injectable} from '@angular/core';
import {ArtistService} from "./artist.service";
import {MatchType} from "./match-type";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private artistService: ArtistService) { }

  public getArtistForKey(key: number)
  {
    return this.artistService.get((key + 1) % 2);
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
