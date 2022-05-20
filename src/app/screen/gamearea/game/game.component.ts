import {Component, OnInit} from '@angular/core';
import {GameService} from "./shared/game.service";
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";
import {KeyboardSelectionComponent} from "./keyboard-selection/keyboard-selection.component";
import {MAT_SNACK_BAR_DATA, MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    // animations: [
    //     trigger('flyInOut', [
    //         transition(':enter', [
    //             //style({ opacity: 0, transform: 'translateY(0px)' }),
    //             animate('2000ms', style({ opacity: 1, transform: 'translateY(0)' })),
    //         ]),
    //         transition(':leave', [
    //             //style({ opacity: 1, transform: 'translateY(0px)' }),
    //             animate('5000ms', style({ opacity: 0, transform: 'translateY(-100%)' })),
    //         ]),
    //     ])],
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

    public showEndgamePopup: boolean = false;

    constructor(public game: GameService, private _snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
    }

    onCheckClicked($event: boolean) {
        if (!this.game.isOver() && this.game.isGuessFilled()) {
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
            this._snackBar.openFromComponent(KeyboardSelectionComponent, {
                data: $event,
                duration: 1500,
                verticalPosition: "top"
            });
            this.game.addArtistToGuess($event);
        }
    }

    private displayEndGame() {
        setTimeout(() => {
            this.showEndgamePopup = true;
        }, 1000);
    }


}
