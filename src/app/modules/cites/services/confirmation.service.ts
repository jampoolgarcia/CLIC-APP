// core angular
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// firebase
import { CollectionReference, DocumentData, Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';

// model
import { ConfirmationI } from '../model/confirmation';


@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  // collection
  private confirmationCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.confirmationCollection = collection(this.firestore, 'confirmation');
  }

    // crea una nueva Confirmation en fire base
    public add(c: ConfirmationI) {
      return addDoc(this.confirmationCollection, c);
    }
  
    // obtiene el listado de Confirmations
    public getAll(){
      return collectionData(this.confirmationCollection, { idField: 'id'}) as Observable<ConfirmationI[]>;
    }
}
