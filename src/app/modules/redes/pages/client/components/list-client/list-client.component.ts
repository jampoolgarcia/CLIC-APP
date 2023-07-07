// core angular
import { Component, OnInit } from '@angular/core';

// app
import { List } from '@core/list';
import { ClientI } from '@modules/redes/model/client';
import { ClientService } from '@modules/redes/services/client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styles: [
  ]
})
export class ListClientComponent extends List implements OnInit {

  public clients$: Observable<ClientI[]> = new Observable;
  private loading: boolean = false;

  constructor(private _service: ClientService) { 
    super();
  }

  ngOnInit() {
    this.getList()
  }


  async getList(){
    try {
      this.loading = true
      let { data: client, error, status } = await this._service.getAll();

      if (error && status !== 406) {
        throw error
      }

      if (client) {
        console.log(client);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.loading = false
    }


  }

}
