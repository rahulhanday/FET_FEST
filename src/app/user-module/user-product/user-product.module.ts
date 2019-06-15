import { NgModule } from '@angular/core';
import { UserProductComponent } from './user-product.component';
import { UserProductService } from './user-product.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        UserProductComponent
    ],
    imports: [TranslateModule],
    providers: [
        UserProductService
    ]
})
export class UserProductModule {

}
