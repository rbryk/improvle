import {Injectable} from '@angular/core';
import {artistType} from "./artistType";

@Injectable({
    providedIn: 'root'
})
export class ArtistService {

    private artists: artistType[] = [
        {
            name: 'Adam Lipski',
            sex: 'M',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'adam_1'
        },
        {
            name: 'Ala Dobrowolna',
            sex: 'F',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'ala_1'
        },
        {
            name: 'Bartek Cicharski',
            sex: 'F',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'bartek_1'
        },
        {
            name: 'Bebe Różalska',
            sex: 'F',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'bebe_1'
        },
        {
            name: 'Dobrosława Bela',
            sex: 'F',
            country: 'OUT',
            groups: ['Group 1'], 
            image: 'bela_1'
        },
        {
            name: 'Cédric Marschal',
            sex: 'M',
            country: 'FR',
            groups: ['Cie La Carpe Haute'],
            image: 'cedric_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'chmara_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'dan_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'emi_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'OUT',
            groups: ['Group 1'], 
            image: 'gael_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'OUT',
            groups: ['Group 1'], 
            image: 'igor_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'inbal_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'jacek_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'jerzyk_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'juliusz_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'kaczmar_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'kalina_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'karo_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'kasia_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'OUT',
            groups: ['Group 1'], 
            image: 'kiki_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'OUT',
            groups: ['Group 1'], 
            image: 'kukl_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'laura_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'OUT',
            groups: ['Group 1'], 
            image: 'lee_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'OUT',
            groups: ['Group 1'], 
            image: 'luka_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'marjan_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'mateusz_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'OUT',
            groups: ['Group 1'], 
            image: 'monica_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'paula_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'roza_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'OUT',
            groups: ['Group 1'], 
            image: 'sacha_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'seba_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'OUT',
            groups: ['Group 1'], 
            image: 'stephen_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'tadek_1'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'OUT',
            groups: ['Group 1'], 
            image: 'tanine'
        },
        {
            name: 'Aaa Bbb',
            sex: 'F',
            country: 'PL',
            groups: ['Group 1'], 
            image: 'wiktor_1'
        },
    ];

    constructor() {
    }

    public get(index: number): artistType {
        return this.artists[index];
    }
}
