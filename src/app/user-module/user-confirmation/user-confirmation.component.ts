import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './user-confirmation.component.html',
    styleUrls: ['./user-confirmation.component.scss']
})
export class UserConfirmationComponent {
    constructor(private router:Router){

    }
    goToProduct(){
        this.router.navigate(['user/product']);
    }
}
