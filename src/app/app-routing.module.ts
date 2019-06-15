import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home-module/home.module#HomeModule' },
    { path: 'farmer', loadChildren: './farmer-module/farmer.module#FarmerModule' },
    { path: 'user', loadChildren: './user-module/user.module#UserModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
