// angular core
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// app
import { ClientI } from '../model/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {


   constructor() {

   }
 
   // crea una nueva cita
   public add(record: ClientI): Promise<any> | null {
    return null;
   }
 
   // obtiene el listado de citas
   public getAll(){
     return new Observable<ClientI[]>;
   }

    // Actualiza la Confirmation
    update(record: ClientI) {

      return null;
    }
  
    // Elimina la confimacion de Firebase.
    delete(id: string) {
      return null;
    }
}
