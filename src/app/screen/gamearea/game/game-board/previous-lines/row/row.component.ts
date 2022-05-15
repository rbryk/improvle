import {Component, Input, OnInit} from '@angular/core';
import {ArtistState} from "../../../shared/artist-state";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  @Input() public guess: ArtistState[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
