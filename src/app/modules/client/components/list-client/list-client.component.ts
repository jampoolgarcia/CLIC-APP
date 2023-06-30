// core angular
import { Component, OnInit } from '@angular/core';

// app
import { List } from '@core/list';
import { ClientI } from '@modules/client/model/client';
import { ClientService } from '@modules/client/services/client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styles: [
  ]
})
export class ListClientComponent extends List implements OnInit {

  public clients$!: Observable<ClientI[]>;

  constructor(private _service: ClientService) { 
    super();
  }

  ngOnInit(): void {
    this.clients$ = this._service.getAll();
  }

}
