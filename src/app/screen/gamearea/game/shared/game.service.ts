import {Injectable} from '@angular/core';
import {ArtistService} from "./artist.service";
import {MatchType} from "./match-type";
import {artistType} from "./artistType";
import {ArtistState} from "./artist-state";
import {SolutionService} from "./solution.service";
import {GameStateStorageService} from "./game-state-storage.service";

@Injectable({
    providedIn: 'root'
})
export class GameService {

    public readonly EASYMODE_FEATURE: boolean = true;
    public easyMode: boolean = false;

    public readonly MAX_ARTISTS = 5;
    public readonly MAX_GUESSES = 6;

    public firstVisit: boolean = true;

    private dummyArtist = ArtistState.dummy();

    public guesses: ArtistState[][] = [];
    public currentInputArtist: number = 0;
    public currentGuessNumber: number = 1;
    public emptyGuess = ['', '', '', '', ''];

    public matchArtists: artistType[] = [];
    public partialArtists: artistType[] = [];
    public missArtists: artistType[] = [];

    public solution: artistType[] = [];
    public keyboard: number[] = [];

    public startDate: Date;

    public currentGuess: artistType[] = this.clearGuess();

    constructor(
        private artistService: ArtistService,
        private solutionService: SolutionService,
        private gameStateStorage: GameStateStorageService
    ) {
        this.startDate = new Date();
        this.firstVisit = gameStateStorage.isFirstVisit();
        this.easyMode = gameStateStorage.getEasyMode();
        if (gameStateStorage.isGameStateSaved(this)) {
            gameStateStorage.load(this);
        } else {
            gameStateStorage.clearGames();
            this.solution = this.solutionService.getSolution();
            this.keyboard = this.solutionService.getKeyboardForSolution(this.solution);
            gameStateStorage.save(this, !this.firstVisit);
        }
        // console.log(this.keyboard);
        // console.log(this.solution);
        // this.currentGuess = [...this.solution];
        // this.currentInputArtist = this.MAX_ARTISTS;
    }

    easyModeFeatureOn() {
        return this.EASYMODE_FEATURE;
    }

    public toggleEasyMode(): void {
        this.easyMode = !this.easyMode;
        this.gameStateStorage.setEasyMode(this.easyMode);
    }

    public setVisited(): void {
        this.gameStateStorage.setFirstVisit();
        this.firstVisit = this.gameStateStorage.isFirstVisit();
    }

    public isOver() {
        return this.youWin() || this.youLose();
    }

    public isOverNotInLastMove() {
        return this.isOver() && this.currentGuessNumber < this.MAX_GUESSES;
    }

    public youWin(): boolean {
        let s1 = JSON.stringify(this.lastGuessed());
        let s2 = JSON.stringify(this.solution);
        return s1 === s2;
    }

    public youLose(): boolean {
        return this.guesses.length >= this.MAX_GUESSES && !this.youWin()
    }

    private lastGuessed(): artistType[] | undefined {
        if (this.guesses.length === 0) {
            return undefined;
        }
        return this.guesses[this.guesses.length - 1].map((value: ArtistState) => {
            return value.artist;
        });
    }

    public fromCurrentGuess(artist: artistType): boolean {
        return this.currentGuess.map(function (v) {
            return v.name;
        }).includes(artist.name);
    }

    public isGuessFull() {
        return this.currentInputArtist === this.MAX_ARTISTS;
    }

    public addArtistToGuess(artist: number) {
        if (this.currentInputArtist < this.MAX_ARTISTS) {
            this.currentGuess[this.currentInputArtist] = this.artistService.get(artist);
            this.currentInputArtist++;
        }
    }

    public isArtistAlreadyUsed(artist: artistType): boolean {
        return this.currentGuess.map(function (v) {
            return v.name;
        }).includes(artist.name);
    }

    public removeArtistFromGuess(): void {
        if (this.currentInputArtist > 0) {
            this.currentInputArtist--;
            this.currentGuess[this.currentInputArtist] = ArtistState.dummy();
        }
    }

    public applyCurrentGuess(): void {
        this.guesses.push(this.checkCurrentGuessResult());
        this.currentGuess = this.clearGuess();
        this.currentInputArtist = 0;
        if (!this.isOver()) {
            this.currentGuessNumber++;
        }
        this.gameStateStorage.save(this, true);
    }

    public getArtistForKey(key: number) {
        return this.artistService.get((key));
    }

    public getMatchTypeForKey(key: number): MatchType {
        const artist = this.artistService.get(key);

        if (this.matchArtists.map(function (e) {
            return e.name;
        }).indexOf(artist.name) > -1) {
            return MatchType.Match;
        }
        if (this.partialArtists.map(function (e) {
            return e.name;
        }).indexOf(artist.name) > -1) {
            return MatchType.Partial;
        }
        if (this.missArtists.map(function (e) {
            return e.name;
        }).indexOf(artist.name) > -1) {
            return MatchType.Miss;
        }
        return MatchType.None;
    }

    public emptyLines() {
        return this.currentGuessNumber < 6 ? [...Array(this.MAX_GUESSES - this.currentGuessNumber).keys()] : [];
    }

    public isGuessFilled(): boolean {
        return this.currentInputArtist === this.MAX_ARTISTS;
    }

    private checkCurrentGuessResult(): ArtistState[] {
        let currentGuessResult: ArtistState[] = [];
        let markedSolution = [...this.solution];
        let markedGuess = [...this.currentGuess];

        // find match
        markedGuess.forEach((artist, index) => {
            if (markedSolution[index].name === artist.name) {
                currentGuessResult[index] = new ArtistState(artist, MatchType.Match);
                this.matchArtists.push(artist);
                markedSolution[index] = this.dummyArtist;
                markedGuess[index] = this.dummyArtist
            }
        });

        // find partial
        markedGuess.forEach((artist, index) => {
            if (artist !== this.dummyArtist) {
                let indexOfMatch = markedSolution.map(function (v) {
                    return v.name
                }).indexOf(artist.name);
                if (markedSolution[index].name !== artist.name && indexOfMatch > -1) {
                    currentGuessResult[index] = new ArtistState(artist, MatchType.Partial);
                    this.partialArtists.push(artist);
                    markedSolution[indexOfMatch] = this.dummyArtist;
                    markedGuess[index] = this.dummyArtist
                }
            }
        });

        // find miss
        markedGuess.forEach((artist, index) => {
            if (artist !== this.dummyArtist) {
                currentGuessResult[index] = new ArtistState(artist, MatchType.Miss);
                this.missArtists.push(artist);
            }
        });

        return currentGuessResult;
    }

    private clearGuess(): artistType[] {
        return Array(this.MAX_ARTISTS).fill(ArtistState.dummy());
    }

}
