import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-leftbar',
    templateUrl: './leftbar.component.html',
    styleUrls: ['./leftbar.component.scss', '../gamearea/header/header.component.scss']
})
export class LeftbarComponent implements OnInit {

    @Output() menuClosed: EventEmitter<string> =
        new EventEmitter<string>();

    constructor() {
    }

    ngOnInit(): void {
    }

    closeMenu(): void {
        this.menuClosed.emit('');
    }
}
