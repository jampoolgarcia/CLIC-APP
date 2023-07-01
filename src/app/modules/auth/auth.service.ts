// core
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// firebase
import { Auth,  User, user, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { addDoc, collectionData, deleteDoc, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import {
  CollectionReference,
  DocumentData,
  collection,
} from '@firebase/firestore';

// model
import { LoginI } from './model/login';
import { UserI } from './model/user';
import { ToastService } from '@shared/components/toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userCollection: CollectionReference<DocumentData>;

  constructor(private auth: Auth, private readonly firestore: Firestore, private _toast: ToastService) { 
    this.userCollection = collection(this.firestore, 'user');
  }

 
  async login({email, password}: LoginI) {

    return await signInWithEmailAndPassword(this.auth, email, password)
   
  }

  logout() {
    return signOut(this.auth);
  }

  async register(user: UserI) {
    const { email, password }: LoginI = user;
    user.password = '';
    const userCredential: any = createUserWithEmailAndPassword(this.auth, email, password);
    const userDocRef = doc(this.firestore, `usuarios/${userCredential.userCredential.uid}`);
    // set(userDocRef, { role: role });
    updateDoc(userDocRef, { ...user });
  }

  getAll() {
    return collectionData(this.userCollection, {
      idField: 'id',
    }) as Observable<UserI[]>;
  }

  get(id: string) {
    const userDocumentReference = doc(this.firestore, `user/${id}`);
    return docData(userDocumentReference, { idField: 'id' });
  }
  
  private create(user: UserI) {
    return addDoc(this.userCollection, user);
  }

  update(user: UserI) {
    const userDocumentReference = doc(
      this.firestore,
      `user/${user?.id}`
    );
    return updateDoc(userDocumentReference, { ...user });
  }

  delete(id: string) {
    const userDocumentReference = doc(this.firestore, `user/${id}`);
    return deleteDoc(userDocumentReference);
  }

  get currentUser(){
    return this.auth.currentUser;
  }

}
