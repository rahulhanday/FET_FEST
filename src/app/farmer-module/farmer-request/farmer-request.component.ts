import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared-module/services/http.service';
import { FarmerRequestService } from './farmer-request.service';
import { IRequests } from '../farmer.model';

@Component({
  selector: 'app-farmer-request',
  templateUrl: './farmer-request.component.html',
  styleUrls: ['./farmer-request.component.scss']
})
export class FarmerRequestComponent implements OnInit {

  // myRequests: Array<IRequests>;
  myRequests: any;

  constructor(private farmerRequestService: FarmerRequestService) {
    this.myRequests = [];
  }

  ngOnInit() {
    this.farmerRequestService.getRequests().subscribe((data: IRequests) => {
      this.myRequests = data;
    });
  }

  handleButtonClick(status, dataStatus) {
    if (status === 'accept') {
      dataStatus.status = 1;
    } else {
      dataStatus.status = 2;
    }
  }
}
