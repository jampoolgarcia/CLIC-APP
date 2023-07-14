// core angular
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

// core app
import { SupabaseDB } from '@core/supabase';

// model
import { CiteI } from '../model/cite';

// supa basse
import { SupabaseClient } from '@supabase/supabase-js';

// shared service
import { UserService } from '@shared/services/user.service';



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
    this.getAll();
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

  // obtiene el listado de citas del usuario
  public async getAllForRedes(userId: string){

    return new Promise((resolve, reject) =>{
      resolve('test')
    });
    
  }

  signOut() {
    return this.supabase.auth.signOut()
  }

  get List(){
    return this.$list.asObservable();
  }
}
