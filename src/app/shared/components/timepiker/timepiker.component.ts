import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbTimepickerConfig, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-timepiker',
  standalone: true,
	imports: [NgbTimepickerModule, FormsModule, JsonPipe],
  templateUrl: './timepiker.component.html',
	providers: [NgbTimepickerConfig],
})
export class TimepikerComponent {

	time: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
	
	meridian = true;

	 toggleMeridian() {
 		this.meridian = !this.meridian;
	 }

  constructor(config: NgbTimepickerConfig) {
		config.seconds = false;
		config.spinners = false;
	}

}
