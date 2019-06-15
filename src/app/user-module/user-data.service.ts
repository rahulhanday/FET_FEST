import { Injectable } from '@angular/core';
import { IProduct } from './user.model';
import { SharedDataService } from '../shared-module/services/shared-data.service';

@Injectable()
export class UserDataService {
    userCartList: IProduct[];
    constructor(private sharedDataService: SharedDataService) {
        this.userCartList = [];
    }
    /**
     * add product to cart function
     * param - product: user has selected
     */
    addProductToCart(product: IProduct) {
        const index = this.checkIfProductExistsInCart(product);
        if (index >= 0) {
            this.userCartList[index].quantity += product.quantity;
        } else {
            this.userCartList.push(JSON.parse(JSON.stringify(product)));
        }
        this.sharedDataService.setCartItemsLength(this.userCartList.length);
    }

    /**
     * validate if product existing in cart
     */
    checkIfProductExistsInCart(product: IProduct) {
        let ind = -1;
        for (let i = 0; i < this.userCartList.length; i++) {
            if (this.userCartList[i].id === product.id) {
                ind = i;
                break;
            }
        }
        return ind;
    }

    removeItemFromCart(id: string) {
        const index = this.userCartList.findIndex((item) => item.id === id);
        if (index !== -1) {
            this.userCartList.splice(index, 1);
        }
        this.sharedDataService.setCartItemsLength(this.userCartList.length);
        return this.userCartList;
    }
}
