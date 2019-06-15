import { Component, ViewEncapsulation } from '@angular/core';
import { CONTEXT_TYPES_ENUM } from '../app.constant';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
    contextTypes: any;
    constructor(private route: Router, private homeService: HomeService) {
        this.contextTypes = CONTEXT_TYPES_ENUM;
    }

    gotoRoute(contextType: string) {
        this.homeService.getContextDetails(contextType).subscribe(() => {
            if (contextType === this.contextTypes.farmer) {
                this.route.navigate(['farmer']);
            } else {
                this.route.navigate(['user']);
            }
        });
    }
}
