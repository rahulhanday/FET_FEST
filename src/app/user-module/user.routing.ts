import { UserProductComponent } from './user-product/user-product.component';
import { RouterModule } from '@angular/router';
import { UserSummaryComponent } from './user-summary/user-summary.component';

const userRoutes = [
    {
        path: '',
        redirectTo: 'product'
    },
    {
        path: 'product',
        component: UserProductComponent
    },
    {
        path: 'summary',
        component: UserSummaryComponent
    }
];
export const userRouting = RouterModule.forChild(userRoutes);
