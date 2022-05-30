import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatchType} from "../shared/match-type";
import {animate, style, transition, trigger} from "@angular/animations";
import {GameService} from "../shared/game.service";
import {ResultService} from "./result.service";
import {ArtistState} from "../shared/artist-state";
import {artistType} from "../shared/artistType";
import {Clipboard} from '@angular/cdk/clipboard';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-endgame-popup',
    templateUrl: './endgame-popup.component.html',
    styleUrls: ['./endgame-popup.component.scss'],
    animations: [
        trigger('endgamePopupAnimationTrigger', [
            transition(':enter', [
                style({opacity: 0}),
                animate('500ms', style({opacity: 1})),
            ])
        ]),
    ]

})
export class EndgamePopupComponent implements OnInit {

    @Output() xClicked: EventEmitter<string> =
        new EventEmitter<string>();

    constructor(
        public game: GameService,
        private clipboard: Clipboard,
        public result: ResultService,
        private _snackBar: MatSnackBar,
    ) {
    }

    public solution: ArtistState[] = [];

    ngOnInit(): void {
        this.prepareSolutionTiles();
    }

    private prepareSolutionTiles() {
        this.game.solution.map((artist: artistType) => {
            this.solution.push({artist: artist, matchType: MatchType.Match});
        })
    }

    public onClick() {
        if (navigator.share) {
            navigator.share({
                title: 'Improvle',
                text: this.result.share(false),
                url: 'https://improvle.pl'
            })
                .then(() => console.log('Successful share'))
                .catch(error => console.log('Error sharing:', error));
        } else {
            this._snackBar.open('Copied to clipboard', undefined, {
                duration: 1500
            });
        }
    }

    closeHelp() {
        this.xClicked.emit('');
    }
}
