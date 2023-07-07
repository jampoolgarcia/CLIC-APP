// angular core
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// app
import { ClientI } from '../model/client';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private supabase: SupabaseClient;
  private TABLE = 'client';

   constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
   }

    // obtiene el listado de citas
    public getAll(){
      return this.supabase
      .from(this.TABLE)
      .select(`*`);
    }
 
   
   
    // crea una nueva cita
   public add(record: ClientI) {
    return this.supabase
    .from(this.TABLE)
    .insert({ ...record });
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
