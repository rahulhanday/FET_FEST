import { Component, OnInit } from '@angular/core';
import { UserProductService } from './user-product.service';
import { IProduct } from '../user.model';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './user-product.component.html',
    styleUrls: ['./user-product.component.scss']
})
export class UserProductComponent implements OnInit {
    userProductList: IProduct[];
    totalAmount: number;
    savedAmount: number;
    noProductError: boolean;
    constructor(private userProductService: UserProductService,
        private userDataService: UserDataService,
        private router: Router) {
        this.userProductList = [];
        this.totalAmount = 0;
        this.savedAmount = 0;
        this.noProductError = false;
    }

    /**on init interface function to initialize product component */
    ngOnInit() {
        this.userProductService.getProducts()
            .subscribe((res: IProduct[]) => {
                this.userProductList = res.concat();
            });
    }

    /**
     * adding product to cart
     * param id - id of product selected from list
     */
    addProductToCart(id: string) {
        const product: IProduct = this.getProduct(id);
        const quantity = parseInt(product.quantity, 10);
        if (quantity && quantity > 0) {
            this.noProductError = false;
            this.userDataService.addProductToCart(product);
            product.quantity = '';
        } else {
            product.error = true;
        }
        this.calcalateAmount();
    }

    /**
     * calculate the amount user has to pay and saved
     */
    calcalateAmount() {
        let tAmount = 0;
        let sAmount = 0;
        for (let i = 0; i < this.userDataService.userCartList.length; i++) {
            tAmount += parseInt(this.userDataService.userCartList[i].quantity, 10) *
                this.userDataService.userCartList[i].price;
            sAmount = parseInt(this.userDataService.userCartList[i].quantity, 10) *
                this.userDataService.userCartList[i].marketPrice;
        }
        this.totalAmount = tAmount;
        this.savedAmount = sAmount - tAmount;
    }

    /**
     * on every quantity change - this gets triggered
     * param product - product user modified
     */
    onQuantityChange(product: IProduct) {
        product.error = false;
    }

    /**
     * param id - fetch specific product from productList
     */
    private getProduct(id: string): IProduct {
        let product: IProduct;
        for (let i = 0; i < this.userProductList.length; i++) {
            if (this.userProductList[i].id === id) {
                product = this.userProductList[i];
                break;
            }
        }
        return product;
    }


    /**
     * proceed to next route
     */
    onProceed() {
        if (this.userDataService.userCartList.length <= 0) {
            this.noProductError = true;
            return;
        }
        this.router.navigate(['user/summary']);
    }
}
