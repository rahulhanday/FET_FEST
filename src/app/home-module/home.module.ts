import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { TranslateModule } from '@ngx-translate/core';
import { HomeService } from './home.service';
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
    imports: [
        HomeRoutingModule,
        TranslateModule,
        SharedModule
    ],
    declarations: [HomeComponent],
    providers: [HomeService]
})
export class HomeModule { }
