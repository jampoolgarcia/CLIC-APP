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
        this.$currentUser.next(user)
      } else {
        this.$currentUser.next(false)
      }
    }catch(error){
      console.log(error)
    };
  }

  private handleUserState() {
    this.supabase.auth.onAuthStateChange((event, session)=> {
      console.log('event', event)
      if(event === 'SIGNED_IN'){
        this.$currentUser.next(session!.user);
        this._router.navigateByUrl('/', { replaceUrl: true })
      } else {
        this.$currentUser.next(false)
        this._router.navigateByUrl('/auth/sing-in', { replaceUrl: true })
      }
    })
  }

  get currentUser(){
    return this.$currentUser.asObservable();
  }

  // logout() {
  //   return signOut(this.auth);
  // }

  // async register(user: UserI) {

  //   try {
  //      // crea al usuario en firebase
  //     const { email, password }: LoginI = user;
  //     const userCredential: any = await createUserWithEmailAndPassword(this.auth, email, password);
  //     const u = userCredential.user;

  //     // Actualiza el perfil del usuario con el nombre
  //     await updateProfile(u, { displayName: user.fullName });

  //     // Crea un documento en Firestore para el usuario con los campos adicionales
  //     const usuarioRef = doc(this.firestore, 'usuarios', u.uid);
  //     await setDoc(usuarioRef, { rol: user.rol, room: user.room, status: user.status });

  //     return u;
  //   } catch (err) {
  //     console.log('err service: ', err);
  //   }

   
   

  //   // const userDocRef = doc(this.firestore, `usuarios/${userCredential.userCredential.uid}`);
  //   // // set(userDocRef, { role: role });
  //   // updateDoc(userDocRef, { ...user });
  // }

  // getAll() {
  //   return collectionData(this.userCollection, {
  //     idField: 'id',
  //   }) as Observable<UserI[]>;
  // }

  // get(id: string) {
  //   const userDocumentReference = doc(this.firestore, `user/${id}`);
  //   return docData(userDocumentReference, { idField: 'id' });
  // }
  
  // private create(user: UserI) {
  //   return addDoc(this.userCollection, user);
  // }

  // update(user: UserI) {
  //   const userDocumentReference = doc(
  //     this.firestore,
  //     `user/${user?.id}`
  //   );
  //   return updateDoc(userDocumentReference, { ...user });
  // }

  // delete(id: string) {
  //   const userDocumentReference = doc(this.firestore, `user/${id}`);
  //   return deleteDoc(userDocumentReference);
  // }

  // get currentUser(){
  //   return this.auth.currentUser;
  // }

}
