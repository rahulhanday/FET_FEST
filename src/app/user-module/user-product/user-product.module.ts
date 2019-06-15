import { NgModule } from '@angular/core';
import { UserProductComponent } from './user-product.component';
import { UserProductService } from './user-product.service';

@NgModule({
    declarations: [
        UserProductComponent
    ],
    providers: [
        UserProductService
    ]
})
export class UserProductModule {

}
