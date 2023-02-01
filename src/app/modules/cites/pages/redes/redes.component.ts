import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
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
	cites$!: Observable<Cite[]>;
  filter = new FormControl('', { nonNullable: true });
	collectionSize = CITES.length;
	page = 1;
	pageSize = 4;

  constructor() {
		this.cites$ = this.filter.valueChanges.pipe(
			startWith(''),
			map((text) => search(text)),
		);
	}

  ngOnInit(): void {
  }

	// refreshCites() {
	// 	this.cites$ = CITES.map((cite, i) => ({ id: i + 1, ...cite })).slice(
	// 		(this.page - 1) * this.pageSize,
	// 		(this.page - 1) * this.pageSize + this.pageSize,
	// 	);
	// }

}
