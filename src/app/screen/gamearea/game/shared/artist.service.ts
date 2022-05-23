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
            country: 'pl',
            groups: ['Lipny Barszcz'],
            image: 'adam_1',
            musican: false
        },
        {
            name: 'Ala Dobrowolna',
            sex: 'F',
            country: 'pl',
            groups: ['Seven Women of Different Ages', 'Wymywammy'],
            image: 'ala_1',
            musican: false
        },
        {
            name: 'Bartek Cicharski',
            sex: 'M',
            country: 'pl',
            groups: ['Pro Forma'],
            image: 'bartek_1',
            musican: false
        },
        {
            name: 'Bebe Różalska',
            sex: 'F',
            country: 'pl',
            groups: ['Seven Women of Different Ages', 'Szafofe'],
            image: 'bebe_1',
            musican: false
        },
        {
            name: 'Dobrosława Bela',
            sex: 'F',
            country: 'pl',
            groups: ['Antymateria'],
            image: 'bela_1',
            musican: false
        },
        {
            name: 'Cédric Marschal',
            sex: 'M',
            country: 'fr',
            groups: ['Anananas&Pampamplemousse'],
            image: 'cedric_1',
            musican: false
        },
        {
            name: 'Kasia Chmara',
            sex: 'F',
            country: 'pl',
            groups: ['Seven Women of Different Ages', 'Wymywammy'],
            image: 'chmara_1',
            musican: false
        },
        {
            name: 'Dan Seyfried',
            sex: 'M',
            country: 'fr',
            groups: ['Anananas&Pampamplemousse'],
            image: 'dan_1',
            musican: false
        },
        {
            name: 'Emilia Szydłowska',
            sex: 'F',
            country: 'pl',
            groups: ['Cytrynowy Sorbet', 'Pro Forma'],
            image: 'emi_1',
            musican: false
        },
        {
            name: 'Gael Doorneweerd-Perry',
            sex: 'M',
            country: 'fr',
            groups: ['Anananas&Pampamplemousse'],
            image: 'gael_1',
            musican: false
        },
        {
            name: 'Igor Wawrzeńczyk',
            sex: 'M',
            country: 'pl',
            groups: ['Cytrynowy Sorbet'],
            image: 'igor_1',
            musican: false
        },
        {
            name: 'Inbal Lori',
            sex: 'F',
            country: 'il',
            groups: ['Lorilees'],
            image: 'inbal_1',
            musican: false
        },
        {
            name: 'Jacek Mikulski',
            sex: 'M',
            country: 'pl',
            groups: ['Impy', 'Syndykat Beki'],
            image: 'jacek_1',
            musican: false
        },
        {
            name: 'Jerzyk Wierzbicki',
            sex: 'M',
            country: 'pl',
            groups: ['Impy', 'Syndykat Beki'],
            image: 'jerzyk_1',
            musican: false
        },
        {
            name: 'Juliusz Roszczyk',
            sex: 'M',
            country: 'pl',
            groups: ['Impy', 'Syndykat Beki'],
            image: 'juliusz_1',
            musican: false
        },
        {
            name: 'Rafał Kaczmarski',
            sex: 'M',
            country: 'pl',
            groups: ['Cytrynowy Sorbet'],
            image: 'kaczmar_1',
            musican: false
        },
        {
            name: 'Kalina Kubica',
            sex: 'F',
            country: 'pl',
            groups: ['Cytrynowy Sorbet'],
            image: 'kalina_1',
            musican: false
        },
        {
            name: 'Karo Pańczyk',
            sex: 'F',
            country: 'pl',
            groups: ['Seven Women of Different Ages', 'Syndykat Beki', 'Niplodram'],
            image: 'karo_1',
            musican: false
        },
        {
            name: 'Kasia Rytter',
            sex: 'F',
            country: 'pl',
            groups: ['Cytrynowy Sorbet'],
            image: 'kasia_1',
            musican: false
        },
        {
            name: 'Kiki Hohnen',
            sex: 'F',
            country: 'nl',
            groups: ['Scandalous Women of History'],
            image: 'kiki_1',
            musican: false
        },
        {
            name: 'Paweł Kukla',
            sex: 'M',
            country: 'pl',
            groups: ['Antymateria', 'Szafofe'],
            image: 'kukl_1',
            musican: false
        },
        {
            name: 'Laura Doorneweerd-Perry',
            sex: 'F',
            country: 'nl',
            groups: ['Scandalous Women of History'],
            image: 'laura_1',
            musican: false
        },
        {
            name: 'Lee White',
            sex: 'M',
            country: 'ca',
            groups: ['Lorilees'],
            image: 'lee_1',
            musican: false
        },
        {
            name: 'Łukasz Orłowski',
            sex: 'M',
            country: 'pl',
            groups: ['Gambit'],
            image: 'luka_1',
            musican: false
        },
        {
            name: 'Marcin Walentynowicz',
            sex: 'M',
            country: 'pl',
            groups: ['Gambit', 'Syndykat Beki'],
            image: 'marjan_1',
            musican: false
        },
        {
            name: 'Mateusz Barczyk',
            sex: 'M',
            country: 'pl',
            groups: ['Lipny Barszcz'],
            image: 'mateusz_1',
            musican: false
        },
        {
            name: 'Monica Gaga',
            sex: 'F',
            country: 'gb',
            groups: [],
            image: 'monica_1',
            musican: false
        },
        {
            name: 'Paula Walendowska',
            sex: 'F',
            country: 'pl',
            groups: ['Gambit'],
            image: 'paula_1',
            musican: false
        },
        {
            name: 'Gosia Różalska',
            sex: 'F',
            country: 'pl',
            groups: ['Seven Women of Different Ages'],
            image: 'roza_1',
            musican: false
        },
        {
            name: 'Sacha Hoedemaker',
            sex: 'M',
            country: 'nl',
            groups: ['(musican)'],
            image: 'sacha_1',
            musican: true
        },
        {
            name: 'Seba Zawadzki',
            sex: 'M',
            country: 'pl',
            groups: ['(musican)'],
            image: 'seba_1',
            musican: true
        },
        {
            name: 'Stephen Davidson',
            sex: 'M',
            country: 'gb',
            groups: [],
            image: 'stephen_1',
            musican: false
        },
        {
            name: 'Tadek Jaśkiewicz',
            sex: 'M',
            country: 'pl',
            groups: ['Pro Forma'],
            image: 'tadek_1',
            musican: false
        },
        {
            name: 'Tanine Dunais',
            sex: 'F',
            country: 'ir',
            groups: ['Scandalous Women of History'],
            image: 'tanine',
            musican: false
        },
        {
            name: 'Wiktor Walentynowicz',
            sex: 'M',
            country: 'pl',
            groups: ['Gambit', 'Syndykat Beki'],
            image: 'wiktor_1',
            musican: false
        },
    ];

    constructor() {
    }

    public get(index: number): artistType {
        return this.artists[index];
    }

    public key(artist: artistType): number {
        return this.artists.indexOf(artist);
    }

    public count(): number {
        return this.artists.length;
    }
}
