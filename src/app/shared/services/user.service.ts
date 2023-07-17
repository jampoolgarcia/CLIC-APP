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
  User
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
    private _router: Router,
    private _spinner: NgxSpinnerService
    ) { 
    this.supabase = SupabaseDB.getInstance();
    this.handleUserState();
  }
  
  
 
  async login({email, password}: LoginI) {
    try {
      const {  data: { user }, error } = await this.supabase.auth.signInWithPassword({email, password});
      if(error) this._toast.show(`Obss, Ha acorrido un Error: ${error.message}`, 'danger');
      this.$currentUser.next(user);
      this._router.navigateByUrl('/');
      return user;
    } catch (error){
      if (error instanceof Error) {
        this._toast.show(`Obss, Ha acorrido un Error: ${error.message}`, 'danger');
      }
      console.log(error);
    }
    return null;
  }

  private handleUserState() {
    try {
       this.supabase.auth.onAuthStateChange((event, session) => {

         const user = session ? session.user : false;

         switch(event){
          case "SIGNED_IN":
            this._spinner.show();
          break;
          case "TOKEN_REFRESHED":
            console.log("[TOKEN_REFRESHED]", session);
            this._spinner.show();
          break;
          case "INITIAL_SESSION":
            console.log("[INITIAL_SESSION]", session);
            if(this._router.url === '/auth/sing-in') this._router.navigateByUrl('/');
            this.$currentUser.next(user);
          break;
          case "SIGNED_OUT":
            console.log("[SIGNED_OUT]", session);
            this._router.navigateByUrl('/auth/sing-in');
            this.$currentUser.next(user);
          break;
          default:
            console.log('event', event);
          break;
         }

         this._spinner.hide();

       })
    } catch (error) {
      console.log(error);
    }
   
  }

  get currentUser(){
    return this.$currentUser.asObservable();
  }

  get referenData(){

    const { id, user_metadata } = this.user;

    return { user_id: id, room_id: user_metadata.room_id };
  }

  get user(){
    return this.$currentUser.getValue();
  }

}
