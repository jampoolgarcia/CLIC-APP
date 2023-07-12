// core
import { Component, OnInit } from '@angular/core';

// model
import { CiteI } from '@modules/redes/model/cite';
import { List } from '@core/list';

// services
import { CitesService } from '@modules/redes/services/cites.service';

// rxjs
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list-cites',
  templateUrl: './list-cites.component.html',
  styles: [`
    .card-body {
         min-height: 346px;
    }`]
})
export class ListCitesComponent extends List implements OnInit {

  public cites$!: Observable<CiteI[]>;

  constructor(private _service: CitesService) {
    super();
  }

  ngOnInit(): void {
    this.cites$ = this._service.List;
    this.cites$.subscribe(res => {
      console.log('res', res);
    })
  }


}
