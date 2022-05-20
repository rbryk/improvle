import {Component, Inject, Input, OnInit} from '@angular/core';
import {GameService} from "../shared/game.service";
import {artistType} from "../shared/artistType";
import {MAT_SNACK_BAR_DATA} from "@angular/material/snack-bar";

@Component({
    selector: 'app-keyboard-selection',
    templateUrl: './keyboard-selection.component.html',
    styleUrls: ['./keyboard-selection.component.scss', '../game-keyboard/keyboard-tile/keyboard-tile.component.scss']
})
export class KeyboardSelectionComponent implements OnInit {

    public artist: artistType | undefined;

    constructor(
        public game: GameService,
        @Inject(MAT_SNACK_BAR_DATA) public data: number
    ) {
    }

    ngOnInit(): void {
        this.artist = this.game.getArtistForKey(this.data)
    }

}
