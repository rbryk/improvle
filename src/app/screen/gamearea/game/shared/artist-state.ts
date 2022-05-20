import {MatchType} from "./match-type";
import {artistType} from "./artistType";

export class ArtistState {

    constructor(public artist: artistType, public matchType: MatchType) {
    }

    public static dummy(): artistType {
        return {
            name: '',
            sex: '',
            country: '',
            image: '',
            groups: [],
            musican: false
        }
    }
}
