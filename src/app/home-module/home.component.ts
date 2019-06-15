import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';
import { CONTEXT_TYPES_ENUM } from '../app.constant';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnDestroy {
    contextTypes: any;
    contextSubscription$: Subscription;

    constructor(private route: Router, private homeService: HomeService) {
        this.contextTypes = CONTEXT_TYPES_ENUM;
    }

    /**
     * Goto Route Based on and set context
     * param contextType
     */
    gotoRoute(contextType: string) {
        this.contextSubscription$ = this.homeService.getContextDetails(contextType).subscribe(() => {
            if (contextType === this.contextTypes.farmer) {
                this.route.navigate(['farmer']);
            } else {
                this.route.navigate(['user']);
            }
        });
    }

    /**
     * Unsubscribe context subscription on destroy
     */
    ngOnDestroy() {
        if (this.contextSubscription$) {
            this.contextSubscription$.unsubscribe();
        }
    }
}
