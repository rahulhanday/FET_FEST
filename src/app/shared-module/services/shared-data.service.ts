import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    'providedIn': 'root'
})
export class SharedDataService {
    private cartItemsCount = new BehaviorSubject<number>(0);
    constructor() { }

    /**
     * Set Cart Item Count
     * param count
     */
    setCartItemsLength(count: number) {
        this.cartItemsCount.next(count);
    }

    /**
     * Get Cart Item Observable
     */
    getCartItemsLength() {
        return this.cartItemsCount.asObservable();
    }
}
