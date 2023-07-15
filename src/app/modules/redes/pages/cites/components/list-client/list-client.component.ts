// core angular
import { Component, OnInit } from '@angular/core';

// app
import { List } from '@core/list';
import { ClientI } from '@modules/redes/model/client';
import { ClientService } from '@modules/redes/services/client.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// externals
import { Observable } from 'rxjs';

import { FormCitesComponent } from '../form-cites/form-cites.component';


@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styles: [`
    .card-body {
         min-height: 414.8px !important;
    }`]
})
export class ListClientComponent extends List implements OnInit {

  public $clients: Observable<ClientI[]>;

  constructor(
    private _client: ClientService,
    private _modal: NgbModal) { 
    super();
    this.$clients = _client.List;
  }

  public openFormCite(client: ClientI) {
		const modalRef = this._modal.open(FormCitesComponent);
		modalRef.componentInstance.client = client;
	}

  ngOnInit() {
   // this.getList();
  }


  // async getList(){
  //   this._spinner.show();
  //   try {
  //     let { data, error, status } = await this._client.getAll();

  //     if (error && status !== 406) {
  //       throw error
  //     }

  //     if (data) {
  //       this._client = data;
  //     }
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       alert(error.message)
  //     }
  //   } finally {
  //     this._spinner.hide();
  //   }


  // }

}
