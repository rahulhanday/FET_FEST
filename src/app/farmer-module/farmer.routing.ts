import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmerDashboardComponent } from './farmer-dashboard/farmer-dashboard.component';
import { FarmerFeedComponent } from './farmer-feed/farmer-feed.component';
import { FarmerRequestComponent } from './farmer-request/farmer-request.component';
import { FarmerConfirmationComponent } from './farmer-confirmation/farmer-confirmation.component';
import { FarmerEarningsComponent } from './farmer-earnings/farmer-earnings.component';

const routes: Routes = [
  { path: '', component: FarmerDashboardComponent, pathMatch: 'full' },
  { path: 'feed', component: FarmerFeedComponent },
  { path: 'request', component: FarmerRequestComponent },
  {
    path: 'confirmation',
    component: FarmerConfirmationComponent
  },
  {
    path: 'earnings',
    component: FarmerEarningsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerRouting { }
