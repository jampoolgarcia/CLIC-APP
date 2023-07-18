// core angular
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

// core app
import { SupabaseDB } from '@core/supabase';

// model
import { CiteI, CiteSaveI } from '../model/cite';

// supa basse
import { REALTIME_POSTGRES_CHANGES_LISTEN_EVENT as EVENT, RealtimePostgresChangesPayload as payload, SupabaseClient, createClient } from '@supabase/supabase-js';


// shared service
import { UserService } from '@shared/services/user.service';
import { Helpers } from '@core/helpers';



@Injectable({
  providedIn: 'root'
})
export class CitesService {

  private TABLE = 'cite'
  private list: CiteI[] = []
  private supabase: SupabaseClient;
  private $list: BehaviorSubject<CiteI[]> = new BehaviorSubject(this.list);

  constructor(
    private _user: UserService
    ) {
    this.supabase = SupabaseDB.getInstance();
    this.handleRealtimeUpdates();
    this.getAllForUserAndDate();
  }

  // crea una nueva cita 
  public async add(record: CiteI) {
    return await this.supabase
    .from(this.TABLE)
    .insert({ ...record })
    .single();
  }

  // obtiene el listado de citas
  private async getAll(){
    try {
      const { error, data, status } = await this.supabase
      .from('cites')
      .select(`*`)

      if(error && status !== 406) throw error;

      if(data) this.$list.next(data);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
  }

   // obtiene el listado de citas
   public async getAllForUserAndDate(date: string = Helpers.dateNow()){
    try {
      const { id  } = this._user.user || '';

      const { error, data, status } = await this.supabase
      .from('cites')
      .select(`*`)
      .match({'user': id, 'date': date});

      if(error && status !== 406) throw error;

      if(data) this.$list.next(data);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
  }


  private handleRealtimeUpdates(){
      
    this.supabase.channel(`RealTime ${this.TABLE}`)
    .on(
      'postgres_changes', 
      {
        event: '*',
        schema: 'public',
        table: this.TABLE
      },
      (payload: payload<CiteSaveI>) => {
        this.realtimeList(payload);
      } 
    ).subscribe()
    
  }

  private async realtimeList(payload: payload<CiteSaveI>){
    await this.getAllForUserAndDate();
    console.log('payload: ', payload);
  }


  signOut() {
    return this.supabase.auth.signOut()
  }

  get List(){
    return this.$list.asObservable();
  }
}
