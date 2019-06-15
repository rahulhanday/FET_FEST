import { Component, ViewEncapsulation } from '@angular/core';
import { LanguageService } from '../shared-module/services/language.service';
import { LANGUAGE_CODES_ENUM } from '../shared-module/shared.constant';
import { ContextService } from '../shared-module/services/context.service';
import { IContext } from '../shared-module/shared.model';
import { SharedDataService } from '../shared-module/services/shared-data.service';
import { CONTEXT_TYPES_ENUM } from '../app.constant';
import { Router } from '@angular/router';

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
    cartItemsCount: number;
    contextTypes: any;
    constructor(private languageService: LanguageService,
        private contextService: ContextService,
        private sharedDataService: SharedDataService,
        private route: Router) {
        this.currentLanguage = this.languageService.getLanguage();
        this.languageCodes = LANGUAGE_CODES_ENUM;
        this.context = this.contextService.getContext();
        this.contextTypes = CONTEXT_TYPES_ENUM;
        this.init();
    }
    changeLanguage(languageCode: string) {
        this.currentLanguage = languageCode;
        this.languageService.setLanguage(this.currentLanguage);
    }

    logoutUser() {
        this.contextService.setContext(null);
        this.route.navigate(['home']);
    }

    private init() {
        this.contextService.onContextChange().subscribe((context) => {
            this.context = context;
        });

        this.sharedDataService.getCartItemsLength().subscribe((count) => {
            this.cartItemsCount = count;
        });
    }
}
