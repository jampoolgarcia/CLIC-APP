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
    this.getList();
    this.cites$ = this._service.getAll();
  }

  async getList(){
    await this._service.getAllForRedes('gOHD1nGmN5S7bSNaKb1suA7B8ow1')
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

}
