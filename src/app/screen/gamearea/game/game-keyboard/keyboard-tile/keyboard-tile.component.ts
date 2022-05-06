import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameService} from "../../shared/game.service";

@Component({
    selector: 'app-keyboard-tile',
    templateUrl: './keyboard-tile.component.html',
    styleUrls: ['./keyboard-tile.component.scss']
})
export class KeyboardTileComponent implements OnInit {

    @Input() key: number = 0;

    @Output() keyClicked: EventEmitter<number> =
        new EventEmitter<number>();

    public image: string = '';

    constructor(public game: GameService) {
    }

    ngOnInit(): void {
        this.image = this.game.getArtistForKey(this.key).image;
    }

    onClick(): void {
        this.keyClicked.emit(this.key);
    }

}
