// core angular
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// model
import { ConfirmationI } from '../model/confirmation';


@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {


  constructor() {
   
  }

    // Crea una nueva Confirmation
    public add(c: ConfirmationI) {
      return null;
    }
  
    // Obtiene el listado de Confirmations
    public getAll(){
      return new Observable<ConfirmationI[]>;
    }

    // Actualiza la Confirmation
    update(c: ConfirmationI) {
      return null;
    }
  
    // Elimina la confimacion
    delete(id: string) {
      return null;
    }

    
}
