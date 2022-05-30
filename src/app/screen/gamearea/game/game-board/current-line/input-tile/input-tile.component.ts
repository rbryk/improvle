import {Component, Input, OnInit} from '@angular/core';
import {artistType} from "../../../shared/artistType";
import {ArtistState} from "../../../shared/artist-state";
import {GameService} from "../../../shared/game.service";
import {ArtistService} from "../../../shared/artist.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {KeyboardSelectionComponent} from "../../../keyboard-selection/keyboard-selection.component";

@Component({
    selector: 'app-input-tile',
    templateUrl: './input-tile.component.html',
    styleUrls: ['./input-tile.component.scss', '../../previous-lines/tile/tile.component.scss']
})
export class InputTileComponent implements OnInit {

    @Input() artist: artistType = ArtistState.dummy();
    @Input() number: number = -1;

    constructor(
        public game: GameService,
        public artistsService: ArtistService,
        private _snackBar: MatSnackBar
    ) {
    }

    ngOnInit(): void {
    }

    public onClick() {
        this._snackBar.openFromComponent(KeyboardSelectionComponent, {
            data: this.artistsService.key(this.artist),
            duration: 1500,
            verticalPosition: "top"
        });
    }

}
