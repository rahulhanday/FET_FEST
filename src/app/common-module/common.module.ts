import { NgModule } from '@angular/core';
import { ContextService } from './services/context.service';
import { LanguageService } from './services/language.service';
import { HttpService } from './services/http.service';
import { SharedDataService } from './services/shared-data.service';
import { DateStripComponent } from './dateStrip/date-strip.component';

@NgModule({
    imports: [],
    declarations: [DateStripComponent],
    providers: [
        ContextService,
        LanguageService,
        HttpService,
        SharedDataService
    ],
    exports: [
        DateStripComponent
    ]
})
export class CommonModule { }
