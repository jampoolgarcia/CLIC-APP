// core
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

// app
import { Form } from '@core/form';
import { CiteI } from '@modules/cites/model/cite';

// service
import { CitesService } from '@modules/cites/services/cites.service';

// rxjs
import { Observable } from 'rxjs';

// external lib
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-cites',
  templateUrl: './form-cites.component.html',
  styleUrls: ['./form-cites.component.scss']
})
export class FormCitesComponent extends Form implements OnInit {
  

  constructor(private fb: FormBuilder, private _service: CitesService) { 
    super();
    this.buildingForm();
  }

  ngOnInit(): void {
   
  }

  buildingForm(): void {
    this.form = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/),
        ],
      ],
      phone: [
        '',
        [Validators.required, Validators.minLength(3)],
      ],
      dateOfBirth: ['', Validators.required],
			hour: ['', Validators.required],
			confirmation: ['', Validators.required],
			observation: ['', Validators.required],
    });
  }

  async onSubmit(): Promise<void> {
		const cite = this.getCiteForm();

		const res = await this._service.add(cite);

		if(res){
			this.form.reset();
      Swal.fire({
        timer: 1500,
        title: '¡Buen trabajo!',
        icon: 'success'
      })
		}
  }

  private getCiteForm(){
		const {
			firstName,
			lastName,
			email,
			phone,
			dateOfBirth,
			hour,
			confirmation,
			observation
		} = this.form.value;

		let cite: CiteI = {
			redes : "test redes",
			firstName,
			lastName,
			email,
			phone,
			dateOfBirth,
			hour,
			confirmation,
			observation,
			room: "test room"
		}

		return cite;

	}

}