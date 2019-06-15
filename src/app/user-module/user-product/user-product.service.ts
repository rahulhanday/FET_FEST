import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared-module/services/http.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { IProduct } from '../user.model';

@Injectable()
export class UserProductService {
    constructor(private httpService: HttpService) {

    }

    /**
     * get products from API
     */
    getProducts(): Observable<IProduct[]> {
        return this.httpService.get('productLists.json').pipe(
            map((res: IProduct[]) => {
                for (let i = 0; i < res.length; i++) {
                    res[i].quantity = '';
                    res[i].error = false;
                }
                return res;
            })
        );
    }
}
