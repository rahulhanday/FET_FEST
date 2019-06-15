import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';
import { FarmerEarningService } from './farmer-earnings.service';
import { Subscription } from 'rxjs';
@Component({
    templateUrl: './farmer-earnings.component.html'
})
export class FarmerEarningsComponent implements OnInit, OnDestroy {
    private subscription$: Subscription;
    constructor(private farmerEarningService: FarmerEarningService) { }

    ngOnInit() {
        setTimeout(() => {
            this.subscription$ = this.farmerEarningService.getEarings().subscribe((earnings) => {
                if (this.subscription$) {
                    this.subscription$.unsubscribe();
                }
                const ctx = (<HTMLCanvasElement>document.getElementById('canvas')).getContext('2d');
                const chart = new Chart(ctx, {
                    type: 'horizontalBar',
                    data: earnings,
                });
            });
        }, 1500);
    }

    ngOnDestroy() {
        if (this.subscription$) {
            this.subscription$.unsubscribe();
        }
    }
}
