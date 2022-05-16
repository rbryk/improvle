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
            image: 'adam_1'
        },
        {
            name: 'Ala Dobrowolna',
            sex: 'F',
            country: 'pl',
            groups: ['Seven Women of Different Ages', 'Allnighters', 'Wymywammy', 'Ohana'],
            image: 'ala_1'
        },
        {
            name: 'Bartek Cicharski',
            sex: 'F',
            country: 'pl',
            groups: ['Pro Forma'],
            image: 'bartek_1'
        },
        {
            name: 'Bebe Różalska',
            sex: 'F',
            country: 'pl',
            groups: ['Seven Women of Different Ages', 'Allnighters', 'SIN', 'Szafofe'],
            image: 'bebe_1'
        },
        {
            name: 'Dobrosława Bela',
            sex: 'F',
            country: 'pl',
            groups: ['Antymateria'],
            image: 'bela_1'
        },
        {
            name: 'Cédric Marschal',
            sex: 'M',
            country: 'fr',
            groups: ['Anananas&Pampamplemousse', 'Allnighters'],
            image: 'cedric_1'
        },
        {
            name: 'Kasia Chmara',
            sex: 'F',
            country: 'pl',
            groups: ['Seven Women of Different Ages', 'Allnighters', 'SIN', 'Szafofe'],
            image: 'chmara_1'
        },
        {
            name: 'Dan Seyfried',
            sex: 'M',
            country: 'fr',
            groups: ['Anananas&Pampamplemousse', 'Allnighters', 'Ohana'],
            image: 'dan_1'
        },
        {
            name: 'Emilia Szydłowska',
            sex: 'F',
            country: 'pl',
            groups: ['Cytrynowy Sorbet', 'Pro Forma'],
            image: 'emi_1'
        },
        {
            name: 'Gael Doorneweerd-Perry',
            sex: 'M',
            country: 'fr',
            groups: ['Anananas&Pampamplemousse', 'Allnighters', 'SIN'],
            image: 'gael_1'
        },
        {
            name: 'Igor Wawrzeńczyk',
            sex: 'M',
            country: 'pl',
            groups: ['Cytrynowy Sorbet'],
            image: 'igor_1'
        },
        {
            name: 'Inbal Lori',
            sex: 'F',
            country: 'is',
            groups: ['Lorilees'],
            image: 'inbal_1'
        },
        {
            name: 'Jacek Mikulski',
            sex: 'M',
            country: 'pl',
            groups: ['Impy', 'Syndykat Beki'],
            image: 'jacek_1'
        },
        {
            name: 'Jerzyk Wierzbicki',
            sex: 'M',
            country: 'pl',
            groups: ['Impy', 'Syndykat Beki'],
            image: 'jerzyk_1'
        },
        {
            name: 'Juliusz Roszczyk',
            sex: 'M',
            country: 'pl',
            groups: ['Impy', 'Syndykat Beki'],
            image: 'juliusz_1'
        },
        {
            name: 'Rafał Kaczmarski',
            sex: 'M',
            country: 'pl',
            groups: ['Cytrynowy Sorbet', 'Allnighters'],
            image: 'kaczmar_1'
        },
        {
            name: 'Kalina Kubica',
            sex: 'F',
            country: 'pl',
            groups: ['Cytrynowy Sorbet'],
            image: 'kalina_1'
        },
        {
            name: 'Karo Pańczyk',
            sex: 'F',
            country: 'pl',
            groups: ['Seven Women of Different Ages', 'Syndykat Beki', 'Niplodram'],
            image: 'karo_1'
        },
        {
            name: 'Kasia Rytter',
            sex: 'F',
            country: 'pl',
            groups: ['Cytrynowy Sorbet'],
            image: 'kasia_1'
        },
        {
            name: 'Kiki Hohnen',
            sex: 'F',
            country: 'nl',
            groups: ['Scandalous Women of History'],
            image: 'kiki_1'
        },
        {
            name: 'Paweł Kukla',
            sex: 'M',
            country: 'pl',
            groups: ['Scandalous Women of History'],
            image: 'kukl_1'
        },
        {
            name: 'Laura Doorneweerd-Perry',
            sex: 'F',
            country: 'nl',
            groups: ['Scandalous Women of History', 'Ohana'],
            image: 'laura_1'
        },
        {
            name: 'Lee White',
            sex: 'M',
            country: 'ca',
            groups: ['Lorilees'],
            image: 'lee_1'
        },
        {
            name: 'Łukasz Orłowski',
            sex: 'M',
            country: 'pl',
            groups: ['Gambit'],
            image: 'luka_1'
        },
        {
            name: 'Marcin Walentynowicz',
            sex: 'M',
            country: 'pl',
            groups: ['Gambit', 'Syndykat Beki'],
            image: 'marjan_1'
        },
        {
            name: 'Mateusz Barczyk',
            sex: 'M',
            country: 'pl',
            groups: ['Lipny Barszcz'],
            image: 'mateusz_1'
        },
        {
            name: 'Monica Gaga',
            sex: 'F',
            country: 'uk',
            groups: [],
            image: 'monica_1'
        },
        {
            name: 'Paula Walendowska',
            sex: 'F',
            country: 'pl',
            groups: ['Gambit'],
            image: 'paula_1'
        },
        {
            name: 'Gosia Różalska',
            sex: 'F',
            country: 'pl',
            groups: ['Seven Women of Different Ages', 'Allnighters', 'Ohana'],
            image: 'roza_1'
        },
        {
            name: 'Sacha Hoedemaker',
            sex: 'M',
            country: 'nl',
            groups: [],
            image: 'sacha_1'
        },
        {
            name: 'Seba Zawadzki',
            sex: 'M',
            country: 'pl',
            groups: [],
            image: 'seba_1'
        },
        {
            name: 'Stephen Davidson',
            sex: 'M',
            country: 'uk',
            groups: ['SIN'],
            image: 'stephen_1'
        },
        {
            name: 'Tadek Jaśkiewicz',
            sex: 'M',
            country: 'pl',
            groups: ['Pro Forma'],
            image: 'tadek_1'
        },
        {
            name: 'Tanine Dunais',
            sex: 'F',
            country: 'ir',
            groups: ['Scandalous Women of History'],
            image: 'tanine'
        },
        {
            name: 'Wiktor Walentynowicz',
            sex: 'M',
            country: 'pl',
            groups: ['Gambit', 'Syndykat Beki'],
            image: 'wiktor_1'
        },
    ];

    constructor() {
    }

    public get(index: number): artistType {
        return this.artists[index];
    }
}
