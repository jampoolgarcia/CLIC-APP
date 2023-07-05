// core angular
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


// model
import { CiteI } from '../model/cite';
import { UsuariosService } from '@shared/services/usuarios.service';

import { environment } from 'src/environments/environment';

import { SupabaseClient, createClient } from '@supabase/supabase-js';


@Injectable({
  providedIn: 'root'
})
export class CitesService {

  private supabase: SupabaseClient;

  constructor(private _usuarios: UsuariosService) {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
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
