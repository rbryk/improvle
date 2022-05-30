import {Injectable} from '@angular/core';
import {ArtistService} from "./artist.service";
import {artistType} from "./artistType";
import {Md5} from 'ts-md5';
import {ArtistState} from "./artist-state";

@Injectable({
    providedIn: 'root'
})
export class SolutionService {

    private readonly _valids = [0, 6658, 12564, 17537, 22195, 27929, 32696, 36537, 40401, 42135, 45431, 46486, 49072, 49854, 50636, 51418, 51827, 52430, 52927, 53424, 53626, 53789, 53921, 54010, 54027, 54044, 54073, 54084, 54091, 54097, 54097, 54097, 54097, 54097, 54097, 54097];

    private readonly _largePrimeNumber = 3167;
    private readonly _veryLargePrimeNumber = 174387521;

    constructor(private artistService: ArtistService) {
    }

    getSolution(): artistType[] {
        let artists: artistType[] = [];
        // do {
        //     artists = this.getRandomSolution();
        // } while (!this.validate(artists));
        // return this.makeLegalPermutation(artists);
        artists = this.generateSolutionSet();
        return this.generaleLegalPermutation(artists);
    }

    private getRandomPosition() {
        let todayTimestamp = this.getTodayTimestamp();
        return (todayTimestamp * this._largePrimeNumber) % this.numberOfSolutions() + 1;
    }

    private getTodayTimestamp(): number {
        let date = new Date();
        date.setHours(date.getHours(), 0, 0, 0);
        return date.getTime();
    }

    public numberOfSolutions(): number {
        return this._valids[this._valids.length - 1];
    }

    public generateSolutionSet(): artistType[] {
        let solutionGlobalIndex = this.getRandomPosition();
        // console.log('solutionGlobalIndex:');
        // console.log(solutionGlobalIndex);
        let startIndex = this._valids.reduce((previousValue, currentValue) => {
            return currentValue < solutionGlobalIndex ? previousValue + 1 : previousValue;
        }, -1);
        let valid: number = this._valids[startIndex];
        let a, b, c, d, e: number;

        a = startIndex;
        // console.log('startIndex:');
        // console.log(startIndex);
        for (b = a + 1; b < this.artistService.count(); b++) {
            // console.log('b = ', b, ' (valids = ', valid, ')');
            for (c = b + 1; c < this.artistService.count(); c++) {
                for (d = c + 1; d < this.artistService.count(); d++) {
                    for (e = d + 1; e < this.artistService.count(); e++) {
                        let solution = [
                            this.artistService.get(a),
                            this.artistService.get(b),
                            this.artistService.get(c),
                            this.artistService.get(d),
                            this.artistService.get(e),
                        ];
                        if (this.validate(solution)) {
                            valid++;
                            if (valid === solutionGlobalIndex) {
                                // console.log('solution:');
                                // console.log(solution);
                                return solution;
                            }
                        }
                    }
                }
            }
        }
        return [];
    }

    private getArrayMutations(arr: any[], perms: any[] = [], len = arr.length) {
        if (len === 1) perms.push(arr.slice(0))

        for (let i = 0; i < len; i++) {
            this.getArrayMutations(arr, perms, len - 1)

            len % 2 // parity dependent adjacent elements swap
                ? [arr[0], arr[len - 1]] = [arr[len - 1], arr[0]]
                : [arr[i], arr[len - 1]] = [arr[len - 1], arr[i]]
        }
        return perms
    }

    public generaleLegalPermutation(artists: artistType[]): artistType[] {
        let permsAll: number[][] = [];
        let perms: number[][] = [];
        let result: artistType[] = [];
        this.getArrayMutations([0, 1, 2, 3, 4], permsAll);
        let musicanIndex = this.musicansIndex(artists);
        if (musicanIndex > -1) {
            perms = permsAll.filter((v, i, a) => v[v.length - 1] === musicanIndex);
        } else {
            perms = permsAll;
        }
        let permutationIndex = this.getRandomPosition() % perms.length;
        let perm = perms[permutationIndex];
        result = perm.map((v) => artists[v]);
        return result;
    }

    makeAllSolutions(): any {
        let result: number[] = Array(35).fill(0);
        ;
        let perms: number[][] = [];
        let a, b, c, d, e: number;
        let valid: number = 0
        let invalid: number = 0;
        let valids: number[] = [];
        for (a = 0; a < this.artistService.count(); a++) {
            for (b = a + 1; b < this.artistService.count(); b++) {
                for (c = b + 1; c < this.artistService.count(); c++) {
                    for (d = c + 1; d < this.artistService.count(); d++) {
                        for (e = d + 1; e < this.artistService.count(); e++) {
                            let solution = [
                                this.artistService.get(a),
                                this.artistService.get(b),
                                this.artistService.get(c),
                                this.artistService.get(d),
                                this.artistService.get(e),
                            ];
                            if (this.validate(solution)) {
                                result[a]++;
                                result[b]++;
                                result[c]++;
                                result[d]++;
                                result[e]++;
                                valid++;
                            } else {
                                invalid++;
                            }
                        }
                    }
                }
            }
            valids[a] = valid;
        }
        console.log('count: ', this.artistService.count());
        console.log('valid: ', valid);
        console.log('invalid: ', invalid);
        console.log('all: ', valid + invalid);
        console.log('valids: ', valids);
        let retVal = result.map((v, i) => this.artistService.get(i).name + ' : ' + v + ' (' + (100 * v / (valid)).toFixed(2) + '%)');
        retVal.push('---------------------------');
        retVal.push('Valid: ' + valid + ' / ' + (valid + invalid));
        return retVal;
    }

    public getKeyboardForSolution(solution: artistType[]): number[] {
        // console.log("solution");
        // console.log(solution);

        let keyboardSolution: number[] = solution.map((a) => this.artistService.key(a));

        let keyboardRest =
            Array.from(Array(this.artistService.count()).keys()).filter(
                x => !keyboardSolution.includes(x)
            );

        let md5val = this.getMd5ForSwaps();
        for (let i = 0; i < md5val.length; i += 2) {
            this.swap(keyboardRest,
                parseInt(md5val.charAt(i), 16),
                parseInt(md5val.charAt(i + 1), 16)
            );
        }
        let md5valSelection = this.getMd5ForSelection().slice(0, 15);
        let keyboard = md5valSelection.split('').reduce(function (prev: number[], curr: string, index: number) {
            if (parseInt(curr, 16) < 8) {
                prev.push(keyboardRest[index]);
            } else {
                prev.push(keyboardRest[index + 15])
            }
            return prev;
        }, []);
        // console.log("keyboardSolution");
        // console.log(keyboardSolution);
        // console.log("keyboard");
        // console.log(keyboard);
        return this.shuffle([...keyboardSolution, ...keyboard]);
    }


    private swap(keyboardRest: number[], index1: number, index2: number) {
        let temp = keyboardRest[index1];
        keyboardRest[index1] = keyboardRest[keyboardRest.length - index2 - 1];
        keyboardRest[keyboardRest.length - index2 - 1] = temp;
    }

    private getMd5ForSwaps() {
        const md5 = new Md5();
        let md5val = md5.appendStr(
            this.getTodayTimestamp() +
            this._largePrimeNumber.toString() +
            this._veryLargePrimeNumber.toString()
        ).end().toString();
        return md5val;
    }

    private getMd5ForSelection() {
        const md5 = new Md5();
        let md5val = md5.appendStr(
            this.getTodayTimestamp() +
            'DdVFh&j#%QTWY$#&$JSRQ#&^jnsr!6ery' +
            this._largePrimeNumber.toString() +
            this._veryLargePrimeNumber.toString()
        ).end().toString();
        return md5val;
    }

    //
    // public getKeyboardForSolutionOld(solution: artistType[]): number[] {
    //     let keyboardSolution: number[] = solution.map((a) => this.artistService.key(a));
    //     let keyboardRest = this.shuffle(
    //         Array.from(Array(this.artistService.count()).keys()).filter(x => !keyboardSolution.includes(x))
    //     ).slice(0, 15);
    //     return this.shuffle([...keyboardSolution, ...keyboardRest]);
    // }

    private validate(artists: artistType[]): boolean {
        if (!this.validateGroups(artists)) {
            return false;
        }
        if (!this.validateHiddenGroups(artists)) {
            return false;
        }
        if (!this.validateCountry(artists)) {
            return false;
        }
        if (!this.validateSex(artists)) {
            return false;
        }
        // if (!this.validateOneOrNoMusicans(artists)) {
        //     console.log("validateOneOrNoMusicans invalid");
        //     return false;
        // }
        // if (!this.validateMusicansCountry(artists)) {
        //     console.log("validateMusicansCountry invalid");
        //     return false;
        // }
        return true;

    }

    // private getRandomSolution(): artistType[] {
    //     let numbers = Array.from(Array(this.artistService.count()).keys());
    //     return this.shuffle(numbers.map((num) => this.artistService.get(num))).slice(0, 5);
    // }

    private shuffle(artists: any[]) {
        return artists.sort(() => Math.random() - 0.5);
    }

    private validateGroups(artists: artistType[]) {
        let allGroups = artists.map((a) => a.groups).flat();
        const noDups = new Set(allGroups);
        // console.log('all:');
        // console.log(allGroups);
        // console.log('noDups:');
        // console.log(noDups);
        return allGroups.length === noDups.size;
    }

    private validateHiddenGroups(artists: artistType[]) {
        let allGroups = artists.map((a) => a.hidden_groups).flat();
        const noDups = new Set(allGroups);
        // console.log('all:');
        // console.log(allGroups);
        // console.log('noDups:');
        // console.log(noDups);
        return allGroups.length === noDups.size;
    }

    private validateCountry(artists: artistType[]) {
        let polandArtists = this.getPolandArtists(artists);
        return [2, 3].includes(polandArtists.length);
    }

    private getPolandArtists(artists: artistType[]) {
        return artists.filter((a) => a.country == 'pl');
    }

    private validateSex(artists: artistType[]) {
        let maleArtists = artists.filter((a) => a.sex == 'M');
        return [2, 3].includes(maleArtists.length);
    }

    private musicansIndex(artists: artistType[]) {
        return artists.reduce(function (acu, a, i, arr) {
            return a.musician === true ? i : acu
        }, -1);
    }

    // private validateMusicansCountry(artists: artistType[]) {
    //     let musicanArtists = artists.filter((a) => a.musican == true);
    //     if (musicanArtists.length == 1) {
    //         let musicanArtist = musicanArtists[0];
    //         let polandArtists = this.getPolandArtists(artists);
    //         if (musicanArtist.country === 'pl') {
    //             return polandArtists.length <= 3;
    //         } else {
    //             return polandArtists.length >= 2
    //         }
    //     }
    //     return true;
    // }

    private makeLegalPermutation(artists: artistType[]): artistType[] {
        return artists.sort((a, b) => (b.musician) ? -1 : 1);
    }

}
