import { NgModule } from '@angular/core';
import { DateStripComponent } from './dateStrip/date-strip.component';
import { DatePipe } from '@angular/common';

@NgModule({
    imports: [],
    declarations: [DateStripComponent],
    exports: [DateStripComponent],
    providers: [DatePipe]
})
export class SharedModule { }
