// core angular
import { Component, OnInit } from '@angular/core';

// app
import { List } from '@core/list';
import { ClientI } from '@modules/redes/model/client';
import { ClientService } from '@modules/redes/services/client.service';

// externals
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styles: [
  ]
})
export class ListClientComponent extends List implements OnInit {

  public $clients: Observable<ClientI[]>;

  constructor(private _client: ClientService, private _spinner: NgxSpinnerService) { 
    super();
    this.$clients = _client.List;
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
