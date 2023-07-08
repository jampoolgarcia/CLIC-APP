// angular core
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


// app
import { Client, ClientI } from '../model/client';
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
   public async add(record: ClientI) {
    return await this.supabase
    .from(this.TABLE)
    .insert({ ...record })
    .single();
   }
 
    // Actualiza la Confirmation
    update(record: ClientI) {

      return null;
    }
  
    // Elimina la confimacion de Firebase.
    delete(id: string) {
      return null;
    }

    getListChanges(){
      const change = new Subject();

      this.supabase
      .channel(this.TABLE)
      .on(
        'postgres_changes', 
        {
          event: '*',
          schema: 'public',
        },
        (payload) => change.next(payload)
      ).subscribe()


      return change.asObservable();
    }
}
