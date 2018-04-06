import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DaterangepickerConfig } from 'ng2-daterangepicker';

@Component({
  	templateUrl: './register.html',
})
export class RegisterComponent  {

  	constructor(private router: Router, private daterangepickerOptions: DaterangepickerConfig) { 
  		this.daterangepickerOptions.settings = {
        	locale: { format: 'DD-MM-YYYY' },
        	alwaysShowCalendars: false,
        	ranges: {
           		'Last Month': [moment().subtract(1, 'month'), moment()],
           		'Last 3 Months': [moment().subtract(4, 'month'), moment()],
           		'Last 6 Months': [moment().subtract(6, 'month'), moment()],
           		'Last 12 Months': [moment().subtract(12, 'month'), moment()],
        	}
    	};
  	}

  	public mainInput = {
    	start: moment().subtract(12, 'month'),
    	end: moment().subtract(6, 'month')
  	}

  	public selectedDate(value: any, dateInput: any) {
    	dateInput.start = value.start;
    	dateInput.end = value.end;
 	}

    private selectedDate(value: any, dateInput: any) {
        dateInput.start = value.start;
        dateInput.end = value.end;
    }

    private applyDate(value: any, dateInput: any) {
        dateInput.start = value.start;
        dateInput.end = value.end;
    }

    public calendarEventsHandler(e:any) {
        console.log(e);
        this.eventLog += '\nEvent Fired: ' + e.event.type;
    }

  	gotoLogin() : void {
  		this.router.navigateByUrl('/login');
  	}
}