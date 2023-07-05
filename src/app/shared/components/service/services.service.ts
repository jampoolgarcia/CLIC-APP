// core angular
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// model
import { ServiceI } from './service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


    constructor() {

    }
  
      // Crea una nueva Confirmation.
      public add(record: ServiceI) {
        return null;
      }
    
      // Obtiene el listado de Confirmations
      public getAll(){
        return new Observable<ServiceI[]>;
      }
  
      // Actualiza la Confirmation.
      update(record: ServiceI) {
        return null;
      }
    
      // Elimina la confimacion de Firebase.
      delete(id: string) {
        return null;
      }

      
}
