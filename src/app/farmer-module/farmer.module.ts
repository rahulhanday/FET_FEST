import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FarmerFeedComponent } from './farmer-feed/farmer-feed.component';
import { FarmerConfirmationComponent } from './farmer-confirmation/farmer-confirmation.component';
import { FarmerRequestComponent } from './farmer-request/farmer-request.component';
import { FarmerDashboardComponent } from './farmer-dashboard/farmer-dashboard.component';
import { FarmerRouting } from './farmer.routing';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FarmerComponent } from './farmer.component';
import { FarmerEarningsComponent } from './farmer-earnings/farmer-earnings.component';
import { FarmerEarningService } from './farmer-earnings/farmer-earnings.service';

@NgModule({
  declarations: [
    FarmerComponent,
    FarmerFeedComponent,
    FarmerConfirmationComponent,
    FarmerRequestComponent,
    FarmerDashboardComponent,
    FarmerEarningsComponent
  ],
  imports: [
    CommonModule,
    FarmerRouting,
    FormsModule,
    NgbModule,
    TranslateModule
  ],
  providers: [FarmerEarningService]
})
export class FarmerModule { }
