import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatchType} from "../shared/match-type";
import {animate, style, transition, trigger} from "@angular/animations";
import {GameService} from "../shared/game.service";
import {ResultService} from "./result.service";
import {ArtistState} from "../shared/artist-state";
import {artistType} from "../shared/artistType";
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-endgame-popup',
  templateUrl: './endgame-popup.component.html',
  styleUrls: ['./endgame-popup.component.scss'],
  animations: [
    trigger('endgamePopupAnimationTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ])
    ]),
  ]

})
export class EndgamePopupComponent implements OnInit {

  @Output() xClicked: EventEmitter<string> =
      new EventEmitter<string>();

  constructor(
      public game: GameService,
      // private clipboard: Clipboard,
      public result: ResultService
  ) { }

  public solution: ArtistState[] = [];

  ngOnInit(): void {
    this.prepareSolutionTiles();
  }

  private prepareSolutionTiles() {
    this.game.solution.map((artist: artistType) => {
      this.solution.push({artist: artist, matchType: MatchType.Match});
    })
  }

  public onClick() {
    //this.snackbar.show('Skopiowano do schowka');
    if (navigator.share) {
      navigator.share({
        title: 'Improvle',
        text: this.result.share(),
        url: 'https://improvle.pl'
      })
          .then(() => console.log('Successful share'))
          .catch(error => console.log('Error sharing:', error));
    }
  }

  closeHelp() {
    this.xClicked.emit('');
  }

}
