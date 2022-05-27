import {Component, OnInit} from '@angular/core';
import {ArtistState} from "../game/shared/artist-state";
import {ArtistService} from "../game/shared/artist.service";
import {MatchType} from "../game/shared/match-type";
import {GameService} from "../game/shared/game.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

    public matchExample: ArtistState[] = [];
    public partialExample: ArtistState[] = [];
    public missExample: ArtistState[] = [];

    constructor(
        private artistService: ArtistService,
        private game: GameService,
        private router: Router,
    ) {
        this.matchExample = [
            new ArtistState(artistService.get(2), MatchType.Miss),
            new ArtistState(artistService.get(1), MatchType.Match),
            new ArtistState(artistService.get(3), MatchType.Miss),
        ]
        this.partialExample = [
            new ArtistState(artistService.get(4), MatchType.Miss),
            new ArtistState(artistService.get(5), MatchType.Partial),
            new ArtistState(artistService.get(6), MatchType.Miss),
        ]
        this.missExample = [
            new ArtistState(artistService.get(7), MatchType.Miss),
            new ArtistState(artistService.get(8), MatchType.Miss),
            new ArtistState(artistService.get(9), MatchType.Miss),
        ]
    }

    ngOnInit(): void {
        this.game.setVisited();
    }

    onPlayClick(): void {
        this.router.navigate(['/game']);
    }
}
