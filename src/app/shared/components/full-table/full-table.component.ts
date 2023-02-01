import { AsyncPipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FullTableService } from './full-table.service';

@Component({
  selector: 'app-full-table',
  standalone: true,
  imports: [
		NgFor,
		DecimalPipe,
		FormsModule,
		AsyncPipe,
		NgbTypeaheadModule,
		NgbdSortableHeader,
		NgbPaginationModule,
		NgIf,
	],
  templateUrl: './full-table.component.html'
})
export class FullTableComponent implements OnInit {

  @Input() list$!: Observable<any[]>;
	total$!: Observable<number>;

	@ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;


	constructor(public service: FullTableService) {
		this.total$ = service.total$;
	}

  ngOnInit() {
    this.service.list$ = this.list$;
  }

	onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		this.service.sortColumn = column;
		this.service.sortDirection = direction;
	}

}
