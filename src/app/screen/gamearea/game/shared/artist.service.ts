import {Injectable} from '@angular/core';
import {artistType} from "./artistType";

@Injectable({
    providedIn: 'root'
})
export class ArtistService {

    private artists: artistType[] = [
        {
            name: 'Adam Zzzzzz',
            sex: 'M',
            country: 'PL',
            image: 'adam_1'
        },
        {
            name: 'Ala Ccccccc',
            sex: 'F',
            country: 'PL',
            image: 'ala_1'
        }
    ];

    constructor() {
    }

    public get(index: number): artistType {
        return this.artists[index];
    }
}
