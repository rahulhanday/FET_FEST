import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-date-strip-component',
    templateUrl: './date-strip.component.html',
    styleUrls: ['./date-strip.component.scss']
})

export class DateStripComponent implements OnInit {

    saturdays: Array<any>;

    @Output() dateSelected = new EventEmitter();

    constructor(private datePipe: DatePipe) {
        this.saturdays = [];
    }

    ngOnInit() {
        /* function to get saturdays on init */
        this.getSaturdays();
    }

    /**
     * get the days of the month
     */
    daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }

    /**
     * Get next 4 saturdays from the retrieved month data
     */
    getSaturdays() {
        const nw = new Date();
        // const saturdays = new Array();
        const getTot = this.daysInMonth(nw.getMonth(), nw.getFullYear());
        this.getSaturdayArray(nw, nw.getFullYear(), nw.getMonth(), getTot);

        /* return saturdays */
        // return saturdays;
    }

    getSaturdayArray(nw, year, month, array) {
        for (let i = new Date(year, month, 1).getDate(); i <= array; i++) {
            // looping through days in month
            const newDate = new Date(year, month, i);
            if (newDate > new Date()) {
                if (newDate.getDay() === 6 && this.saturdays.length < 4) {
                    // if Saturday
                    this.saturdays.push(newDate);
                }
            }
        }

        if (this.saturdays.length < 4) {
            const getNextMonth = this.daysInMonth(nw.getMonth() + 1, nw.getFullYear());
            this.getSaturdayArray(nw, nw.getFullYear(), nw.getMonth() + 1, getNextMonth);
        }
    }

    /* Transform date to the readable format */
    transformDate(date) {
        return this.datePipe.transform(date, 'mediumDate');
    }

    /* Send the event through output on div click */
    handleDateClick(event, date) {
        this.dateSelected.emit(date);
    }

}
