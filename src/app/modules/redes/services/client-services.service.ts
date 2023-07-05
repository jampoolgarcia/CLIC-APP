// core angular
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// app
import { ServiceI } from '@shared/components/service/service';

@Injectable({
  providedIn: 'root'
})
export class ClientServicesService {


  constructor() {
   
  }

   // Obtiene el listado de Confirmations
   public getAll(){
    return new Observable<ServiceI[]>;
  }
}
