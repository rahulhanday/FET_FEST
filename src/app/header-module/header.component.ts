import { Component, ViewEncapsulation } from '@angular/core';
import { LanguageService } from '../shared-module/services/language.service';
import { LANGUAGE_CODES_ENUM } from '../shared-module/shared.constant';
import { ContextService } from '../shared-module/services/context.service';
import { IContext } from '../shared-module/shared.model';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
    currentLanguage: string;
    languageCodes: any;
    context: IContext;
    constructor(private languageService: LanguageService, private contextService: ContextService) {
        this.currentLanguage = this.languageService.getLanguage();
        this.languageCodes = LANGUAGE_CODES_ENUM;
        this.context = this.contextService.getContext();
        this.init();
    }
    changeLanguage(languageCode: string) {
        this.currentLanguage = languageCode;
        this.languageService.setLanguage(this.currentLanguage);
    }

    private init() {
        this.contextService.onContextChange().subscribe((context) => {
            this.context = context;
        });
    }
}
