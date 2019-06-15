import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE_CODES_ENUM } from '../shared.constant';

@Injectable({
    'providedIn': 'root'
})
export class LanguageService {
    private currentLanguage: string;
    constructor(private translateService: TranslateService) {
        this.currentLanguage = LANGUAGE_CODES_ENUM.english;
        this.translateService.setDefaultLang(LANGUAGE_CODES_ENUM.english);
        this.translateService.use(LANGUAGE_CODES_ENUM.english);
    }

    setLanguage(languageCode: string): void {
        this.currentLanguage = languageCode;
        this.translateService.use(languageCode);
    }

    getLanguage(): string {
        return this.currentLanguage;
    }
}
