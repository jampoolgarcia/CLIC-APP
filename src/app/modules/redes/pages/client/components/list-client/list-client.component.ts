// core angular
import { Component, OnInit } from '@angular/core';

// app
import { List } from '@core/list';
import { ClientI } from '@modules/redes/model/client';
import { ClientService } from '@modules/redes/services/client.service';

// externals
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styles: [
  ]
})
export class ListClientComponent extends List implements OnInit {

  public clients: ClientI[] = [];

  constructor(private _service: ClientService, private _spinner: NgxSpinnerService) { 
    super();
  }

  ngOnInit() {
    this.getList();
    this.handleRealtimeUpdates();
  }


  async getList(){
    this._spinner.show();
    try {
      let { data, error, status } = await this._service.getAll();

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        this.clients = data;
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this._spinner.hide();
    }


  }

  handleRealtimeUpdates(){
    this._service.getListChanges().subscribe(update =>{
      console.log('update: ', update);
    })
  }

}
