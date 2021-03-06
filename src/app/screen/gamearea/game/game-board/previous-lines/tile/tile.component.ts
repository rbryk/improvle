import {Component, Input, OnInit} from '@angular/core';
import {MatchType} from "../../../shared/match-type";
import {ArtistState} from "../../../shared/artist-state";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ArtistService} from "../../../shared/artist.service";
import {KeyboardSelectionComponent} from "../../../keyboard-selection/keyboard-selection.component";
import {GameService} from "../../../shared/game.service";

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

    @Input() artistWithState: ArtistState = new ArtistState(ArtistState.dummy(), MatchType.None);
    @Input() index: number = 0;

    constructor(
        public game: GameService,
        private _snackBar: MatSnackBar,
        private artistsService: ArtistService
    ) {
    }

    ngOnInit(): void {
    }

    public onClick() {
        this._snackBar.openFromComponent(KeyboardSelectionComponent, {
            data: this.artistsService.key(this.artistWithState.artist),
            duration: 1500,
            verticalPosition: "top"
        });
    }

    public isPartial(): boolean {
        return this.artistWithState.matchType === MatchType.Partial;
    }

    public matchOnTheLeft(): boolean {
        return this.game.solution.map(function (v) {
            return v.name
        }).indexOf(this.artistWithState.artist.name) < this.index;
    }

}
