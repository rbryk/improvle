import {Injectable} from '@angular/core';
import {GameService} from "../shared/game.service";
import {MatchType} from "../shared/match-type";

@Injectable({
    providedIn: 'root'
})
export class ResultService {

    private readonly link: string = 'https://improvle.pl';

    constructor(
        public game: GameService,

    ) {
    }

    public share(addLink: boolean): string {
        const board = this.getBoardAsAscii();
        let result: string = '';
        if (this.game.youWin()) {
            result +=
                '#improvle solved successfully!';
        } else {
            result +=
                'I\'ve failed to solve #improvle.';
        }
        result += "\n"
        result += board;
        result += 'Play on';
        result += (addLink) ? ' ' + this.link : '';
        return result;
    }

    private getBoardAsAscii() {
        let result: string = '';
        this.game.guesses.forEach(((row) => {
            row.forEach((value) => {
                result += this.matchTypeAsAscii(value.matchType)
            })
            result += '\n'
        }))
        return result;
    }

    private matchTypeAsAscii(type: MatchType): string {
        switch (type) {
            case MatchType.Match: {
                return "🟦";
            }
            case MatchType.Partial: {
                return "🟧";
            }
            case MatchType.Miss: {
                return "⬛"
            }
        }
        return '?';
    }

}
