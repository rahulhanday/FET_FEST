import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared-module/services/http.service';

@Injectable()
export class UserProductService {
    constructor(private httpService: HttpService) {

    }

    /**
     * get products from API
     */
    getProducts() {

    }
}
