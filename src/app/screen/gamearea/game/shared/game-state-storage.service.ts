import {Injectable} from '@angular/core';
import {GameService} from "./game.service";

@Injectable({
    providedIn: 'root'
})
export class GameStateStorageService {

    private firstVisitKey = 'firstVisit';
    private easyModeKey = 'easyMode';

    constructor() {

    }

    isFirstVisit(): boolean {
        return (localStorage.getItem(this.firstVisitKey) === null);
    }

    setFirstVisit(): void {
        localStorage.setItem(this.firstVisitKey, JSON.stringify(false));
    }

    getEasyMode(): boolean {
        let val = localStorage.getItem(this.easyModeKey);
        if (val !== null) {
            return JSON.parse(val);
        }
        return false;
    }

    setEasyMode(mode: boolean): void {
        localStorage.setItem(this.easyModeKey, JSON.stringify(mode));
    }

    save(game: GameService, saveFirstVisit: boolean) {
        if (saveFirstVisit) {
            this.setFirstVisit();
        }
        game.firstVisit = this.isFirstVisit();
        let key = this.getKey(game.startDate);
        let value = {
            solution: game.solution,
            keyboard: game.keyboard,
            guesses: game.guesses,
            matchArtists: [...game.matchArtists],
            partialArtists: [...game.partialArtists],
            missArtists: [...game.missArtists],
        }
        localStorage.setItem(key, JSON.stringify(value));
    }

    load(game: GameService) {
        let gameState = JSON.parse(this.getSavedGameState(game));
        game.solution = gameState.solution;
        game.keyboard = gameState.keyboard;
        game.guesses = gameState.guesses;
        game.matchArtists = [...gameState.matchArtists];
        game.partialArtists = [...gameState.partialArtists];
        game.missArtists = [...gameState.missArtists];
        game.currentGuessNumber = game.guesses.length;
        if (!game.isOver()) {
            game.currentGuessNumber++;
        }
    }

    clearGames() {
        localStorage.clear();
    }

    getSavedGameState(game: GameService): any {
        let state = localStorage.getItem(this.getKey(game.startDate));
        return state;
    }

    isGameStateSaved(game: GameService): boolean {
        return this.getSavedGameState(game) !== null;
    }

    private getKey(startDate: Date): string {
        let date = new Date(startDate);
        date.setHours(0, 0, 0, 0);
        return date.toLocaleString();
    }
}
