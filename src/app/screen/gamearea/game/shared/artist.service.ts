import {Injectable} from '@angular/core';
import {artistType} from "./artistType";
import {ArtistState} from "./artist-state";

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
            hidden_groups: [],
            image: 'adam_1',
            musician: false
        },
        {
            name: 'Ala Dobrowolna',
            sex: 'F',
            country: 'pl',
            groups: ['Seven Women of Different Ages', 'Wymywammy'],
            hidden_groups: [],
            image: 'ala_1',
            musician: false
        },
        {
            name: 'Bartek Cicharski',
            sex: 'M',
            country: 'pl',
            groups: ['Pro Forma'],
            hidden_groups: [],
            image: 'bartek_1',
            musician: false
        },
        {
            name: 'Bebe Różalska',
            sex: 'F',
            country: 'pl',
            groups: ['Seven Women of Different Ages', 'Szafofe'],
            hidden_groups: [],
            image: 'bebe_1',
            musician: false
        },
        {
            name: 'Dobrosława Bela',
            sex: 'F',
            country: 'pl',
            groups: ['Antymateria'],
            hidden_groups: [],
            image: 'bela_1',
            musician: false
        },
        {
            name: 'Cédric Marschal',
            sex: 'M',
            country: 'fr',
            groups: ['Anananas&Pampamplemousse'],
            hidden_groups: [],
            image: 'cedric_1',
            musician: false
        },
        {
            name: 'Kasia Chmara',
            sex: 'F',
            country: 'pl',
            groups: ['Seven Women of Different Ages', 'Wymywammy'],
            hidden_groups: [],
            image: 'chmara_1',
            musician: false
        },
        {
            name: 'Dan Seyfried',
            sex: 'M',
            country: 'fr',
            groups: ['Anananas&Pampamplemousse'],
            hidden_groups: [],
            image: 'dan_1',
            musician: false
        },
        {
            name: 'Emilia Szydłowska',
            sex: 'F',
            country: 'pl',
            groups: ['Cytrynowy Sorbet', 'Pro Forma'],
            hidden_groups: [],
            image: 'emi_1',
            musician: false
        },
        {
            name: 'Gael Doorneweerd-Perry',
            sex: 'M',
            country: 'fr',
            groups: ['Anananas&Pampamplemousse'],
            hidden_groups: [],
            image: 'gael_1',
            musician: false
        },
        {
            name: 'Igor Wawrzeńczyk',
            sex: 'M',
            country: 'pl',
            groups: ['Cytrynowy Sorbet'],
            hidden_groups: [],
            image: 'igor_1',
            musician: false
        },
        {
            name: 'Inbal Lori',
            sex: 'F',
            country: 'il',
            groups: ['Lorilees'],
            hidden_groups: [],
            image: 'inbal_1',
            musician: false
        },
        {
            name: 'Jacek Mikulski',
            sex: 'M',
            country: 'pl',
            groups: ['Impy'],
            hidden_groups: [],
            image: 'jacek_1',
            musician: false
        },
        {
            name: 'Jerzyk Wierzbicki',
            sex: 'M',
            country: 'pl',
            groups: ['Impy'],
            hidden_groups: [],
            image: 'jerzyk_1',
            musician: false
        },
        {
            name: 'Juliusz Roszczyk',
            sex: 'M',
            country: 'pl',
            groups: ['Impy'],
            hidden_groups: [],
            image: 'juliusz_1',
            musician: false
        },
        {
            name: 'Rafał Kaczmarski',
            sex: 'M',
            country: 'pl',
            groups: ['Cytrynowy Sorbet'],
            hidden_groups: [],
            image: 'kaczmar_1',
            musician: false
        },
        {
            name: 'Kalina Kubica',
            sex: 'F',
            country: 'pl',
            groups: ['Cytrynowy Sorbet'],
            hidden_groups: [],
            image: 'kalina_1',
            musician: false
        },
        {
            name: 'Karo Pańczyk',
            sex: 'F',
            country: 'pl',
            groups: ['Seven Women of Different Ages', 'Niplodram'],
            hidden_groups: [],
            image: 'karo_1',
            musician: false
        },
        {
            name: 'Kasia Rytter',
            sex: 'F',
            country: 'pl',
            groups: ['Cytrynowy Sorbet'],
            hidden_groups: [],
            image: 'kasia_1',
            musician: false
        },
        {
            name: 'Kiki Hohnen',
            sex: 'F',
            country: 'nl',
            groups: ['Scandalous Women of History'],
            hidden_groups: [],
            image: 'kiki_1',
            musician: false
        },
        {
            name: 'Paweł Kukla',
            sex: 'M',
            country: 'pl',
            groups: ['Antymateria', 'Szafofe'],
            hidden_groups: [],
            image: 'kukl_1',
            musician: false
        },
        {
            name: 'Laura Doorneweerd-Perry',
            sex: 'F',
            country: 'nl',
            groups: ['Scandalous Women of History'],
            hidden_groups: [],
            image: 'laura_1',
            musician: false
        },
        {
            name: 'Lee White',
            sex: 'M',
            country: 'ca',
            groups: ['Lorilees'],
            hidden_groups: [],
            image: 'lee_1',
            musician: false
        },
        {
            name: 'Łukasz Orłowski',
            sex: 'M',
            country: 'pl',
            groups: ['Gambit'],
            hidden_groups: [],
            image: 'luka_1',
            musician: false
        },
        {
            name: 'Marcin Walentynowicz',
            sex: 'M',
            country: 'pl',
            groups: ['Gambit'],
            hidden_groups: [],
            image: 'marjan_1',
            musician: false
        },
        {
            name: 'Mateusz Barczyk',
            sex: 'M',
            country: 'pl',
            groups: ['Lipny Barszcz'],
            hidden_groups: [],
            image: 'mateusz_1',
            musician: false
        },
        {
            name: 'Monica Gaga',
            sex: 'F',
            country: 'gb',
            groups: [],
            hidden_groups: ['Gaga&Stephen'],
            image: 'monica_1',
            musician: false
        },
        {
            name: 'Paula Walendowska',
            sex: 'F',
            country: 'pl',
            groups: ['Gambit'],
            hidden_groups: [],
            image: 'paula_1',
            musician: false
        },
        {
            name: 'Gosia Różalska',
            sex: 'F',
            country: 'pl',
            groups: ['Seven Women of Different Ages'],
            hidden_groups: [],
            image: 'roza_1',
            musician: false
        },
        {
            name: 'Sacha Hoedemaker',
            sex: 'M',
            country: 'nl',
            groups: ['(musician)'],
            hidden_groups: [],
            image: 'sacha_1',
            musician: true
        },
        {
            name: 'Seba Zawadzki',
            sex: 'M',
            country: 'pl',
            groups: ['(musician)'],
            hidden_groups: [],
            image: 'seba_1',
            musician: true
        },
        {
            name: 'Stephen Davidson',
            sex: 'M',
            country: 'gb',
            groups: [],
            hidden_groups: ['Gaga&Stephen'],
            image: 'stephen_1',
            musician: false
        },
        {
            name: 'Tadek Jaśkiewicz',
            sex: 'M',
            country: 'pl',
            groups: ['Pro Forma'],
            hidden_groups: [],
            image: 'tadek_1',
            musician: false
        },
        {
            name: 'Tanine Dunais',
            sex: 'F',
            country: 'ir',
            groups: ['Scandalous Women of History'],
            hidden_groups: [],
            image: 'tanine',
            musician: false
        },
        {
            name: 'Wiktor Walentynowicz',
            sex: 'M',
            country: 'pl',
            groups: ['Gambit'],
            hidden_groups: [],
            image: 'wiktor_1',
            musician: false
        },
    ];

    constructor() {
    }

    public get(index: number): artistType {
        if (index === -1) {
            return ArtistState.dummy();
        }
        let a = this.artists[index];
        let b = JSON.stringify(a);
        let c = JSON.parse(b)
        return c;
    }

    public key(artist: artistType): number {
        // let art = JSON.parse(JSON.stringify(this.artists));
        // let elem = JSON.parse(JSON.stringify(artist));
        return this.artists.map(function (e: artistType) {
            return e.name;
        }).indexOf(artist.name);
    }

    public count(): number {
        return this.artists.length;
    }
}
