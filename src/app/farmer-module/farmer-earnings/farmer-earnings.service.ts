import { Injectable } from '@angular/core';
import { HttpService } from '../../shared-module/services/http.service';

@Injectable()
export class FarmerEarningService {
    constructor(private httpService: HttpService) { }
    getEarings() {
        return this.httpService.get('myEarnings.json');
    }
}

