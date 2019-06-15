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

@NgModule({
  declarations: [
    FarmerComponent,
    FarmerFeedComponent,
    FarmerConfirmationComponent,
    FarmerRequestComponent,
    FarmerDashboardComponent
  ],
  imports: [
    CommonModule,
    FarmerRouting,
    FormsModule,
    NgbModule,
    TranslateModule
  ]
})
export class FarmerModule {}
