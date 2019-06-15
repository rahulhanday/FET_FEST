import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerFeedComponent } from './farmer-feed/farmer-feed.component';
import { FarmerConfirmationComponent } from './farmer-confirmation/farmer-confirmation.component';
import { FarmerRequestComponent } from './farmer-request/farmer-request.component';
import { FarmerDashboardComponent } from './farmer-dashboard/farmer-dashboard.component';
import { FarmerRoutingModule } from './farmer-module-routing.module';

@NgModule({
  declarations: [FarmerFeedComponent, FarmerConfirmationComponent, FarmerRequestComponent, FarmerDashboardComponent],
  imports: [
    CommonModule,
    FarmerRoutingModule
  ]
})
export class FarmerModuleModule { }
