import { Component, ViewEncapsulation, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { IProduct } from '../user.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
    templateUrl: './user-summary.component.html',
    styleUrls: [
        'user-summary.component.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class UserSummaryComponent implements OnInit {
    userCartList: IProduct[];
    grandTotal: number;
    @ViewChild('paymentModal') paymentModal: ElementRef;
    constructor(private userDataService: UserDataService,
        private modalService: NgbModal,
        private route: Router) {
        this.grandTotal = 0;
    }

    ngOnInit() {
        this.userCartList = this.userDataService.userCartList;
        this.calculateGrandTotal();
    }

    removeItem(id: string) {
        this.userCartList = this.userDataService.removeItemFromCart(id);
        this.calculateGrandTotal();
    }

    private calculateGrandTotal() {
        this.userCartList.forEach((item) => {
            this.grandTotal = this.grandTotal + (Number(item.quantity) * item.price);
        });
    }

    proceedToPay() {
        this.modalService.open(this.paymentModal);
    }

    paymentDone() {
        this.modalService.dismissAll();
        this.route.navigate(['user/confirmation']);
    }
}
