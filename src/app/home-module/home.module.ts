import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '../common-module/common.module';
import { HomeService } from './home.service';

@NgModule({
    imports: [
        HomeRoutingModule,
        TranslateModule,
        CommonModule
    ],
    declarations: [HomeComponent],
    providers: [HomeService]
})
export class HomeModule { }
