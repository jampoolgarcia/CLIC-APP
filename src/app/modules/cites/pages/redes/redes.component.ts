// core
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// rxjs
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

// model
import { CiteI } from '../../model/cite';

// services
import { CitesService } from '@modules/cites/services/cites.service';

// alerta
import Swal from 'sweetalert2';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.scss']
})
export class RedesComponent implements OnInit {
	
	public form!: FormGroup;
	public cites$!: Observable<CiteI[]>;
  public filter = new FormControl('', { nonNullable: true });
	public page = 1;
	public pageSize = 5;


  constructor(private fb: FormBuilder, private _service: CitesService ) {
		this.buildForm();
	}

  ngOnInit(): void {
		this.cites$ = this._service.getAll();
  }

	private buildForm() {
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

	

	public async onSave(){

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


	public isInvalid(control: string) {
		return (this.form.get(control)?.errors && this.form.get(control)?.dirty);
	}

	public isValid(control: string){
		return !this.form.get(control)?.errors;
	}

	public getControl(control: string){
		return this.form.get(control);
	}

}
