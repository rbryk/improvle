import {Component, OnInit} from '@angular/core';
import {ArtistService} from "../shared/artist.service";
import {GameService} from "../shared/game.service";

@Component({
    selector: 'app-game-board',
    templateUrl: './game-board.component.html',
    styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

    constructor(
        public game: GameService,
        public artistService: ArtistService
    ) {
    }

    ngOnInit(): void {
    }

}
