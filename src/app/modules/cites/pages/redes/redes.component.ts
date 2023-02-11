import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

// model cites
interface Cite {
	firstName: string;
	lastName: string;
	hour: string;
	phone: string;
  dateOfBirth: Date;
  email: string;
  confirmation: string;
  observation: string;
}

// example
const CITES: Cite[] = [
	{
		firstName: "test 1",
	  lastName: "test test",
	  hour: "12:30",
	  phone: "971989688",
    dateOfBirth: new Date(31/12/1993),
    email: 'test@gmail.com',
    confirmation: 'ASISTIO',
    observation: 'Lorem isup'
	},
	{
		firstName: "test 2",
	  lastName: "test test",
	  hour: "12:30",
	  phone: "971989688",
    dateOfBirth: new Date(31/12/1993),
    email: 'test@gmail.com',
    confirmation: 'ASISTIO',
    observation: 'Lorem isup'
	},
	{
		firstName: "test 3",
	  lastName: "test test",
	  hour: "12:30",
	  phone: "971989688",
    dateOfBirth: new Date(31/12/1993),
    email: 'test@gmail.com',
    confirmation: 'ASISTIO',
    observation: 'Lorem isup'
	},
	{
		firstName: "test 4",
	  lastName: "test test",
	  hour: "12:30",
	  phone: "971989688",
    dateOfBirth: new Date(31/12/1993),
    email: 'test@gmail.com',
    confirmation: 'ASISTIO',
    observation: 'Lorem isup'
	},
  {
		firstName: "test 5",
	  lastName: "test test",
	  hour: "12:30",
	  phone: "971989688",
    dateOfBirth: new Date(31/12/1993),
    email: 'test@gmail.com',
    confirmation: 'ASISTIO',
    observation: 'Lorem isup'
	},
  {
		firstName: "test 5",
	  lastName: "test test",
	  hour: "12:30",
	  phone: "971989688",
    dateOfBirth: new Date(31/12/1993),
    email: 'test@gmail.com',
    confirmation: 'ASISTIO',
    observation: 'Lorem isup'
	},
  {
		firstName: "test 5",
	  lastName: "test test",
	  hour: "12:30",
	  phone: "971989688",
    dateOfBirth: new Date(31/12/1993),
    email: 'test@gmail.com',
    confirmation: 'ASISTIO',
    observation: 'Lorem isup'
	},
];

function search(text: string): Cite[] {
	return CITES.filter((cite) => {
		const term = text.toLowerCase();
		return (
			cite.firstName.toLowerCase().includes(term) ||
			cite.lastName.toLowerCase().includes(term) ||
			cite.confirmation.toLowerCase().includes(term)
		);
	});
}

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.scss']
})
export class RedesComponent implements OnInit {
	
	public form!: FormGroup;
	public cites$!: Observable<Cite[]>;
  public filter = new FormControl('', { nonNullable: true });
	public page = 1;
	public pageSize = 5;


  constructor(private fb: FormBuilder) {
		this.buildForm();
		this.cites$ = this.filter.valueChanges.pipe(
			startWith(''),
			map((text) => search(text)),
		);
	}

  ngOnInit(): void {
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
      birthDate: ['', Validators.required],
			hours: ['', Validators.required],
			confirmation: ['', Validators.required],
			observation: ['', Validators.required],
    });
  }

	

	onSave(){
		console.log(this.form.value);
	}

	// refreshCites() {
	// 	this.cites$ = CITES.map((cite, i) => ({ id: i + 1, ...cite })).slice(
	// 		(this.page - 1) * this.pageSize,
	// 		(this.page - 1) * this.pageSize + this.pageSize,
	// 	);
	// }

	isInvalid(control: string) {
		return (this.form.get(control)?.errors && this.form.get(control)?.dirty);
	}

	isValid(control: string){
		return !this.form.get(control)?.errors;
	}

	getControl(control: string){
		return this.form.get(control);
	}

}
