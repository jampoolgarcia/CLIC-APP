// core
import { Component, OnInit } from '@angular/core';

// model
import { CiteI } from '@modules/cites/model/cite';
import { List } from '@core/list';
import { ConfirmationI } from '@modules/cites/model/confirmation';

// services
import { CitesService } from '@modules/cites/services/cites.service';
import { ConfirmationService } from '@modules/cites/services/confirmation.service';

// rxjs
import { Observable } from 'rxjs';

// pipes
import { FilterPipe } from 'src/app/pipes/filter.pipe';

@Component({
  selector: 'app-list-cites',
  templateUrl: './list-cites.component.html',
  styleUrls: ['./list-cites.component.scss']
})
export class ListCitesComponent extends List implements OnInit {

  public cites$!: Observable<CiteI[]>;

  constructor(private _service: CitesService) {
    super();
  }

  ngOnInit(): void {
    this.cites$ = this._service.getAll();
  }

}
