import { Injectable } from '@angular/core';

// firebase
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { addDoc, collectionData, deleteDoc, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import {
  CollectionReference,
  DocumentData,
  collection,
} from '@firebase/firestore';
import { Observable } from 'rxjs';
import { LoginI } from './model/login';
import { UserI } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userCollection: CollectionReference<DocumentData>;

  constructor(private auth: Auth, private readonly firestore: Firestore) { 
    this.userCollection = collection(this.firestore, 'user');
  }

 
  login({email, password}: LoginI) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  register(user: UserI) {
    const { email, password }: LoginI = user;
    user.password = '';
    console.log(this.create(user));
    return createUserWithEmailAndPassword(this.auth, email, password);
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

}
