import { NgModule } from '@angular/core';
import { ContextService } from './services/context.service';
import { LanguageService } from './services/language.service';
import { HttpService } from './services/http.service';
import { SharedDataService } from './services/shared-data.service';

@NgModule({
    imports: [],
    declarations: [],
    providers: [
        ContextService,
        LanguageService,
        HttpService,
        SharedDataService
    ],
    exports: []
})
export class CommonModule { }
