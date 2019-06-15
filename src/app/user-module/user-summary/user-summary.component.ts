import { Component, ViewEncapsulation } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
    templateUrl: './user-summary.component.html',
    styleUrls: [
        'user-summary.component.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class UserSummaryComponent {
    constructor(private userDataService: UserDataService) { }
}
