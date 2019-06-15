import { NgModule } from '@angular/core';
import { UserProductComponent } from './user-product.component';
import { UserProductService } from './user-product.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared-module/shared.module';

@NgModule({
    declarations: [
        UserProductComponent
    ],
    imports: [
        FormsModule,
        SharedModule,
        TranslateModule,
        CommonModule
    ],
    providers: [
        UserProductService
    ]
})
export class UserProductModule {

}
