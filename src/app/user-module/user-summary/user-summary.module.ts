import { NgModule } from '@angular/core';
import { UserSummaryComponent } from './user-summary.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [TranslateModule, CommonModule, NgbModule],
    declarations: [
        UserSummaryComponent
    ]
})
export class UserSummaryModule {

}
