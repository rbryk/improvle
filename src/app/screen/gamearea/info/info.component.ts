import {Component, OnInit} from '@angular/core';
import {SolutionService} from "../game/shared/solution.service";

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

    public result: string[] = [];

    constructor(private solutionsService: SolutionService) {
    }

    ngOnInit(): void {
    }

    onClick(): void {
        this.result = this.solutionsService.makeAllSolutions();
    }
}
