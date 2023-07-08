// core angular
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

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

  private supabase: SupabaseClient;

  constructor(private _user: UserService) {
    this.supabase = SupabaseDB.getInstance();
  }

  // crea una nueva cita en firebase
  public async add(cite: CiteI) {
      return null;
    
  }

  // obtiene el listado de citas
  public getAll(){
    return new Observable<CiteI[]>;
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
}
