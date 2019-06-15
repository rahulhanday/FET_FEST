import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared-module/services/http.service';
import { IRequests } from '../farmer.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FarmerRequestService {

  constructor(private httpService: HttpService) { }

  getRequests() {
    return this.httpService.get('myRequests.json');
  }
}
