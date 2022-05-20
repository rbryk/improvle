import {Injectable} from '@angular/core';
import {ArtistService} from "./artist.service";
import {artistType} from "./artistType";
import {ArtistState} from "./artist-state";

@Injectable({
    providedIn: 'root'
})
export class SolutionService {

    constructor(private artistService: ArtistService) {
    }

    getSolution(): artistType[] {
        let artists: artistType[] = [];
        do {
            artists = this.getRandomSolution();
        } while (!this.validate(artists));
        return this.makeLegalPermutation(artists);
    }

    public getKeyboardForSolution(solution: artistType[]): number[] {
        let keyboardSolution: number[] = solution.map((a) => this.artistService.key(a));
        let keyboardRest = this.shuffle(
            Array.from(Array(this.artistService.count()).keys()).filter(x => !keyboardSolution.includes(x))
        ).slice(0, 15);
        return this.shuffle([...keyboardSolution, ...keyboardRest]);
    }

    private validate(artists: artistType[]): boolean {
        if (!this.validateGroups(artists)) {
            console.log("validateGroups invalid");
            return false;
        }
        if (!this.validateCountry(artists)) {
            console.log("validateCountry invalid");
            return false;
        }
        if (!this.validateSex(artists)) {
            console.log("validateSex invalid");
            return false;
        }
        if (!this.validateOneOrNoMusicans(artists)) {
            console.log("validateOneOrNoMusicans invalid");
            return false;
        }
        if (!this.validateMusicansCountry(artists)) {
            console.log("validateMusicansCountry invalid");
            return false;
        }
        return true;

    }

    private getRandomSolution(): artistType[] {
        let numbers = Array.from(Array(this.artistService.count()).keys());
        return this.shuffle(numbers.map((num) => this.artistService.get(num))).slice(0, 5);
    }

    private shuffle(artists: any[]) {
        return artists.sort(() => Math.random() - 0.5);
    }

    private validateGroups(artists: artistType[]) {
        let allGroups = artists.map((a) => a.groups).flat();
        const noDups = new Set(allGroups);
        console.log('all:');
        console.log(allGroups);
        console.log('noDups:');
        console.log(noDups);
        return allGroups.length === noDups.size;
    }

    private validateCountry(artists: artistType[]) {
        let polandArtists = this.getPolandArtists(artists);
        return polandArtists.length !== artists.length;
    }

    private getPolandArtists(artists: artistType[]) {
        return artists.filter((a) => a.country == 'pl');
    }

    private validateSex(artists: artistType[]) {
        let maleArtists = artists.filter((a) => a.sex == 'M');
        return maleArtists.length !== artists.length && maleArtists.length !== 0
    }

    private validateOneOrNoMusicans(artists: artistType[]) {
        let musicanArtists = artists.filter((a) => a.musican === true);
        return musicanArtists.length < 2;
    }

    private validateMusicansCountry(artists: artistType[]) {
        let musicanArtists = artists.filter((a) => a.musican == true);
        if (musicanArtists.length == 1) {
            let musicanArtist = musicanArtists[0];
            let polandArtists = this.getPolandArtists(artists);
            if (musicanArtist.country === 'pl') {
                return polandArtists.length <= 3;
            } else {
                return polandArtists.length >= 2
            }
        }
        return true;
    }

    private makeLegalPermutation(artists: artistType[]): artistType[] {
        return artists.sort((a, b) => (b.musican) ? -1 : 1);
    }

}
