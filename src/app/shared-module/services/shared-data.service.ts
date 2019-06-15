import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    'providedIn': 'root'
})
export class SharedDataService {
    private cartItemsCount = new BehaviorSubject<number>(0);
    constructor() { }

    setCartItemsLength(count: number) {
        this.cartItemsCount.next(count);
    }

    getCartItemsLength() {
        return this.cartItemsCount.asObservable();
    }
}
