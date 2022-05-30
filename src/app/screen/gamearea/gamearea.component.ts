import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-gamearea',
    templateUrl: './gamearea.component.html',
    styleUrls: ['./gamearea.component.scss']
})
export class GameareaComponent implements OnInit {

    @Output() menuClicked: EventEmitter<string> =
        new EventEmitter<string>();

    constructor() {
    }

    ngOnInit(): void {
    }

    onMenuClicked($event: string) {
        this.menuClicked.emit($event);
    }
}
