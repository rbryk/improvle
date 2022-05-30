import {Component, OnInit} from '@angular/core';
import {GameService} from "./shared/game.service";
import {KeyboardSelectionComponent} from "./keyboard-selection/keyboard-selection.component";
import {MAT_SNACK_BAR_DATA, MatSnackBar} from '@angular/material/snack-bar';
import {ArtistService} from "./shared/artist.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

    public showEndgamePopup: boolean = false;

    constructor(
        public game: GameService,
        private artistService: ArtistService,
        private router: Router,
        private _snackBar: MatSnackBar
    ) {
    }

    ngOnInit(): void {
        if (this.game.firstVisit) {
            this.router.navigate(['/help']);
        }
        if (this.game.isOver()) {
            this.displayEndGame();
        }
    }

    onCheckClicked($event: boolean) {
        if (this.game.isGuessFilled() && !this.game.isOver()) {
            this.game.applyCurrentGuess();
            if (this.game.isOver()) {
                this.displayEndGame();
            }
        }
    }

    onBackSpaceClicked($event: boolean) {
        if (!this.game.isOver()) {
            this.game.removeArtistFromGuess();
        }
    }

    onProfileChosen($event: number | null) {
        if ($event !== null) {
            if (!this.game.isGuessFull() && !this.game.isOver()) {
                if (!this.game.isArtistAlreadyUsed(this.artistService.get($event))) {
                    this._snackBar.openFromComponent(KeyboardSelectionComponent, {
                        data: $event,
                        duration: 1500,
                        verticalPosition: "top"
                    });
                    this.game.addArtistToGuess($event);
                }
            }
        }
    }

    private displayEndGame() {
        setTimeout(() => {
            this.showEndgamePopup = true;
        }, 1000);
    }

    onXClicked() {
        this.showEndgamePopup = false;
    }
}
