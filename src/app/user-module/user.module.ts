import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { userRouting } from './user.routing';
import { UserProductModule } from './user-product/user-product.module';
import { UserSummaryModule } from './user-summary/user-summary.module';
import { UserDataService } from './user-data.service';
import { TranslateModule } from '@ngx-translate/core';
import { UserConfirmationModule } from './user-confirmation/user-confirmation.module';

@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        TranslateModule,
        UserProductModule,
        UserSummaryModule,
        UserConfirmationModule,
        userRouting
    ],
    providers: [
        UserDataService
    ],
    exports: [UserComponent],
    bootstrap: [UserComponent]
})
export class UserModule {

}
