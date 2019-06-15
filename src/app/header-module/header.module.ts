import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
    imports: [NgbModule, CommonModule, FormsModule, TranslateModule, SharedModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class HeaderModule { }

