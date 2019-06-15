import { Injectable } from '@angular/core';
import { IProduct } from './user.model';

@Injectable()
export class UserDataService {
    userCartList: IProduct[];
    constructor() {
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
}
