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
export class ComfirmationService {

  // collection
  private confirmationCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.confirmationCollection = collection(this.firestore, 'confirmation');
  }

    // crea una nueva cita en fire base
    public add(cite: ConfirmationI) {
      return addDoc(this.confirmationCollection, cite);
    }
  
    // obtiene el listado de citas
    public getAll(){
      return collectionData(this.confirmationCollection, { idField: 'id'}) as Observable<ConfirmationI[]>;
    }
}
