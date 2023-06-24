// core angular
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// firebase
import { CollectionReference, DocumentData, Firestore, collection, addDoc, collectionData, updateDoc, deleteDoc, doc } from '@angular/fire/firestore';

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

    // Crea una nueva Confirmation en firebase
    public add(c: ConfirmationI) {
      return addDoc(this.confirmationCollection, c);
    }
  
    // Obtiene el listado de Confirmations
    public getAll(){
      return collectionData(this.confirmationCollection, { idField: 'id'}) as Observable<ConfirmationI[]>;
    }

    // Actualiza la Confirmation en firebase.
    update(c: ConfirmationI) {
      const documentReference = doc(
        this.firestore,
        `confirmation/${c?.id}`
      );
      return updateDoc(documentReference, { ...c });
    }
  
    // Elimina la confimacion de Firebase.
    delete(id: string) {
      const documentReference = doc(this.firestore, `confirmation/${id}`);
      return deleteDoc(documentReference);
    }
}
