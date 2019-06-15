import { Component, ViewEncapsulation } from '@angular/core';
import { LanguageService } from '../shared-module/services/language.service';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
    constructor(private languageService: LanguageService) { }
}
