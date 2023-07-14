// core
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// supabase
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js'

// core app
import { SupabaseDB } from '@core/supabase';

// model
import { LoginI } from '../../modules/auth/model/login';
import { ToastService } from '@shared/components/toast/toast.service';
import { Router } from '@angular/router';

// external lib
import { NgxSpinnerService } from 'ngx-spinner';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  private supabase: SupabaseClient;
  private $currentUser: BehaviorSubject<boolean | User  | any > = new BehaviorSubject(null);

  constructor(
    private _toast: ToastService,
    private _router: Router
    ) { 
    this.supabase = SupabaseDB.getInstance();
    this.configUser();
    this.handleUserState();
  }
  
  
 
  async login({email, password}: LoginI) {
    return this.supabase.auth.signInWithPassword({email, password});
  }

  private async configUser(){
    try{
      const { error, data: user }  = await this.supabase.auth.getUser();
      if (user) {
        //console.log('user', user);
        this.$currentUser.next(user)
      } else {
        this.$currentUser.next(false)
      }
    }catch(error){
      console.log(error)
    };
  }

  private handleUserState() {
    try {
      this.supabase.auth.onAuthStateChange((event, session) => {

        console.log('event', event);

        if (!session) return;

        console.log('session', session);
        if (event === 'SIGNED_IN') {
          this.$currentUser.next(session!.user);
          this._router.navigateByUrl('/', { replaceUrl: true });
        } else {
          this.$currentUser.next(false);
          this._router.navigateByUrl('/auth/sing-in', { replaceUrl: true });
        }
      })
    } catch (error) {
      console.log(error);
    }
   
  }

  get currentUser(){
    return this.$currentUser.asObservable();
  }

  getReferenData(){

    const { id, user_metadata } = this.$currentUser.getValue().user;

    return { user_id: id, room_id: user_metadata.room_id };
  }

}
