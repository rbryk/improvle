import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameService} from "../../shared/game.service";
import {artistType} from "../../shared/artistType";
import {ArtistState} from "../../shared/artist-state";

@Component({
    selector: 'app-keyboard-tile',
    templateUrl: './keyboard-tile.component.html',
    styleUrls: ['./keyboard-tile.component.scss']
})
export class KeyboardTileComponent implements OnInit {

    @Input() key: number = 0;

    @Output() keyClicked: EventEmitter<number> =
        new EventEmitter<number>();

    public artist: artistType = ArtistState.dummy();

    constructor(public game: GameService) {
    }

    ngOnInit(): void {
        this.artist = this.game.getArtistForKey(this.key);
    }

    onClick(): void {
        this.keyClicked.emit(this.key);
    }

}
