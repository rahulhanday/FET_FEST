import { Injectable } from '@angular/core';
import { HttpService } from '../shared-module/services/http.service';
import { CONTEXT_TYPES_ENUM } from '../app.constant';
import { map } from 'rxjs/operators';
import { ContextService } from '../shared-module/services/context.service';
import { IFarmerModel, IUserModel } from '../shared-module/shared.model';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {
    constructor(private httpService: HttpService, private contextService: ContextService) { }

    getContextDetails(type: string): Observable<void> {
        return CONTEXT_TYPES_ENUM.farmer === type ? this.getFarmerDetails() : this.getUserDetails();
    }

    /**
     * Get Farmer Details
     */
    private getFarmerDetails(): Observable<void> {
        return this.httpService.get('admin.json').pipe(
            map((data: IFarmerModel) => {
                this.contextService.setContext({
                    'type': CONTEXT_TYPES_ENUM.farmer,
                    'name': data.displayName,
                    'location': data.location,
                    'city': data.city,
                    'cityToSell': data.cityToSell
                });
            })
        );
    }

    /**
     * Get User Details
     */
    private getUserDetails(): Observable<void> {
        return this.httpService.get('user.json').pipe(
            map((data: IUserModel) => {
                this.contextService.setContext({
                    'type': CONTEXT_TYPES_ENUM.user,
                    'name': data.displayName,
                    'location': data.location,
                    'city': data.city
                });
            })
        );
    }
}
