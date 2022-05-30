import {MatchType} from "./match-type";
import {artistType} from "./artistType";

export class ArtistState {

    constructor(
        public artist: artistType,
        public matchType: MatchType
    ) {
    }

    public static dummy(): artistType {
        return {
            name: '',
            sex: '',
            country: '',
            image: '',
            groups: [],
            hidden_groups: [],
            musician: false
        }
    }

}
