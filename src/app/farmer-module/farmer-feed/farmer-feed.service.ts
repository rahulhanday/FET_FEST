import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './../../shared-module/services/http.service';
import { IVegetables } from './farmer-feed.data';
import { IContext } from '../../shared-module/shared.model';
import { ContextService } from 'src/app/shared-module/services/context.service';
@Injectable()
export class FarmerFeedService {
  constructor(
    private httpService: HttpService,
    private context: ContextService
  ) {}

  getVegetables() {
    return this.httpService.get('marketProductPrice.json');
  }

  getCity(): IContext {
    return this.context.getContext();
  }
}
