import { Component, OnInit } from '@angular/core';
import { UserProductService } from './user-product.service';
import { IProduct } from '../user.model';
import { UserDataService } from '../user-data.service';

@Component({
    templateUrl: './user-product.component.html',
    styleUrls: ['./user-product.component.scss']
})
export class UserProductComponent implements OnInit {
    userProductList: IProduct[];
    constructor(private userProductService: UserProductService,
        private userDataService: UserDataService) {
        this.userProductList = [];
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
            this.userDataService.addProductToCart(product);
            product.quantity = '';
        } else {
            product.error = true;
        }
    }

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
}
