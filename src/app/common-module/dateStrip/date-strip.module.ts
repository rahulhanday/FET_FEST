import { NgModule } from '@angular/core';
import { DateStripComponent } from './date-strip.component';
import { DatePipe } from '@angular/common';

@NgModule({
    declarations: [DateStripComponent],
    exports: [DateStripComponent],
    providers: [DatePipe]
})
export class DateStripModule { }

