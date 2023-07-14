// angular core
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

// external lib
import { REALTIME_POSTGRES_CHANGES_LISTEN_EVENT as EVENT, RealtimePostgresChangesPayload as payload, SupabaseClient, createClient } from '@supabase/supabase-js';

// app
import { ClientI } from '../model/client';

import { SupabaseDB } from '@core/supabase';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private list: ClientI[] = [];
  private $clientList: BehaviorSubject<ClientI[]> = new BehaviorSubject(this.list);
  private supabase: SupabaseClient;
  private TABLE = 'client';

   constructor() {
    this.supabase = SupabaseDB.getInstance();
    this.handleRealtimeUpdates();
    this.getAll();
   }

    // carga el listado
    private async getAll(){
      try {
           let { data, error, status } = await this.supabase
           .from(this.TABLE)
           .select(`*`);

           if (error && status !== 406) throw error;
           

           if (data) this.$clientList.next(data);
           
         } catch (error) {
           if (error instanceof Error) {
             alert(error.message)
           }
         }
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

    private handleRealtimeUpdates(){
      
      this.supabase
      .channel(this.TABLE)
      .on(
        'postgres_changes', 
        {
          event: '*',
          schema: 'public',
        },
        (payload: payload<ClientI>) => {
          this.realtimeList(payload);
        } 
      ).subscribe()
      
    }

    private realtimeList(payload: payload<ClientI>){
      switch(payload.eventType){
        case EVENT.INSERT:
          console.log('insert logic');
          this.$clientList.getValue().push(payload.new);
        break;
        case EVENT.UPDATE:
          console.log('update logic');
        break;
        case EVENT.DELETE:
          console.log('DELETE logic');
        break;
      }
      console.log('payload: ', payload);
    }

    get List(){
      return this.$clientList.asObservable();
    }
}
