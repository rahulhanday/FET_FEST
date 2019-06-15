import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { TranslateModule } from '@ngx-translate/core';
import { HomeService } from './home.service';

@NgModule({
    imports: [
        HomeRoutingModule,
        TranslateModule
    ],
    declarations: [HomeComponent],
    providers: [HomeService]
})
export class HomeModule { }
