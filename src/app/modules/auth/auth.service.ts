// core
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
import { LoginI } from './model/login';
import { ToastService } from '@shared/components/toast/toast.service';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private supabase: SupabaseClient;

  constructor(private _toast: ToastService) { 
    this.supabase = SupabaseDB.getInstance();
  }

 
  async login({email, password}: LoginI) {
    return this.supabase.auth.signInWithPassword({email, password});
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
