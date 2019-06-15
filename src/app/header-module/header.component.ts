import { Component, ViewEncapsulation } from '@angular/core';
import { LanguageService } from '../shared-module/services/language.service';
import { LANGUAGE_CODES_ENUM } from '../shared-module/shared.constant';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
    currentLanguage: string;
    languageCodes: any;
    constructor(private languageService: LanguageService) {
        this.currentLanguage = this.languageService.getLanguage();
        this.languageCodes = LANGUAGE_CODES_ENUM;
    }
    changeLanguage(languageCode: string) {
        this.currentLanguage = languageCode;
        this.languageService.setLanguage(this.currentLanguage);
    }
}
