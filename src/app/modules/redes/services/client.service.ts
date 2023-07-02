// angular core
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// firebase
import { CollectionReference, DocumentData, Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';

// app
import { ClientI } from '../model/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

   // collection
   private recordCollection: CollectionReference<DocumentData>;

   constructor(private readonly firestore: Firestore) {
     // inializacion de coleccion
     this.recordCollection = collection(this.firestore, 'client');
   }
 
   // crea una nueva cita en fire base
   public add(record: ClientI) {
     return addDoc(this.recordCollection, record);
   }
 
   // obtiene el listado de citas
   public getAll(){
     return collectionData(this.recordCollection, { idField: 'id'}) as Observable<ClientI[]>;
   }

    // Actualiza la Confirmation en firebase.
    update(record: ClientI) {
      const documentReference = doc(
        this.firestore,
        `client/${record?.id}`
      );
      return updateDoc(documentReference, { ...record });
    }
  
    // Elimina la confimacion de Firebase.
    delete(id: string) {
      const documentReference = doc(this.firestore, `client/${id}`);
      return deleteDoc(documentReference);
    }
}
