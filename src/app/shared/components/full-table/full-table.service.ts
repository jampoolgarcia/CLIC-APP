import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './sortable.directive';

interface SearchResult {
	list: any[];
	total: number;
}

interface State {
	page: number;
	pageSize: number;
	searchTerm: string;
	sortColumn: SortColumn;
	sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

function sort(list: any[], column: SortColumn, direction: string): any[] {
	if (direction === '' || column === '') {
		return list;
	} else {
		return [...list].sort((a, b) => {
			const res = compare(a[column], b[column]);
			return direction === 'asc' ? res : -res;
		});
	}
}

function matches(list: any, term: string, pipe: PipeTransform) {

  let keys = Object.keys(list);

  for(let i=0; i< keys.length; i++){
    let key = keys[i];
    console.log(list[key]);
    if(typeof list[key] === 'string' ){
      console.log('string');
      console.log(list[key].toLowerCase().includes(term.toLowerCase()));
    }else if(typeof list[key] === 'number' ){
      console.log('number');
      console.log(pipe.transform(list[key]).includes(term));
    }
  }


	return (
		list.name.toLowerCase().includes(term.toLowerCase()) ||
		pipe.transform(list.area).includes(term) ||
		pipe.transform(list.population).includes(term)
	);
}

@Injectable({
  providedIn: 'root'
})
export class FullTableService {

  private _loading$ = new BehaviorSubject<boolean>(true);
	private _search$ = new Subject<void>();
	private _list$ = new BehaviorSubject<any[]>([]);
	private _total$ = new BehaviorSubject<number>(0);

	private _state: State = {
		page: 1,
		pageSize: 4,
		searchTerm: '',
		sortColumn: '',
		sortDirection: '',
	};

	constructor(private pipe: DecimalPipe) {
		this._search$
			.pipe(
				tap(() => this._loading$.next(true)),
				debounceTime(200),
				switchMap(() => this._search()),
				delay(200),
				tap(() => this._loading$.next(false)),
			)
			.subscribe((result) => {
				this._list$.next(result.list);
				this._total$.next(result.total);
			});

		this._search$.next();
	}

	get list$() {
		return this._list$.asObservable();
	}
	get total$() {
		return this._total$.asObservable();
	}
	get loading$() {
		return this._loading$.asObservable();
	}
	get page() {
		return this._state.page;
	}
	get pageSize() {
		return this._state.pageSize;
	}
	get searchTerm() {
		return this._state.searchTerm;
	}

	set page(page: number) {
		this._set({ page });
	}
	set pageSize(pageSize: number) {
		this._set({ pageSize });
	}
	set searchTerm(searchTerm: string) {
		this._set({ searchTerm });
	}
	set sortColumn(sortColumn: SortColumn) {
		this._set({ sortColumn });
	}
	set sortDirection(sortDirection: SortDirection) {
		this._set({ sortDirection });
	}

	private _set(patch: Partial<State>) {
		Object.assign(this._state, patch);
		this._search$.next();
	}

	private _search(): Observable<SearchResult> {
		const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

		// 1. sort
		let list = sort([], sortColumn, sortDirection);

		// 2. filter
		list = list.filter((any) => matches(list, searchTerm, this.pipe));
		const total = list.length;

		// 3. paginate
		list = list.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
		return of({ list, total });
	}
}
