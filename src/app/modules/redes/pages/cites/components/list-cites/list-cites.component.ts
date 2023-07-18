// core
import { Component, OnInit } from '@angular/core';

// model
import { CiteI } from '@modules/redes/model/cite';
import { List } from '@core/list';

// services
import { CitesService } from '@modules/redes/services/cites.service';

// rxjs
import { Observable } from 'rxjs';
import { Helpers } from '@core/helpers';


@Component({
  selector: 'app-list-cites',
  templateUrl: './list-cites.component.html',
  styles: [`
    .card-body {
         min-height: 346px;
    }`]
})
export class ListCitesComponent extends List implements OnInit {

  public date = Helpers.dateNow();
  public cites$!: Observable<CiteI[]>;

  constructor(private _cites: CitesService) {
    super();
  }

  ngOnInit(): void {
    this.cites$ = this._cites.List;
  }

  get minDate(){
    return Helpers.getMinDateCite();
  }

  dateFilter() {
    this._cites.getAllForUserAndDate(this.date);
  }


}
