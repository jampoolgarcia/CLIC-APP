// core angular
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// firebase
import { CollectionReference, DocumentData, Firestore, collection, addDoc, collectionData, updateDoc, deleteDoc, doc } from '@angular/fire/firestore';

// model
import { ServiceI } from './service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

    // collection
    private recordCollection: CollectionReference<DocumentData>;

    constructor(private readonly firestore: Firestore) {
      this.recordCollection = collection(this.firestore, 'services');
    }
  
      // Crea una nueva Confirmation en firebase
      public add(record: ServiceI) {
        return addDoc(this.recordCollection, record);
      }
    
      // Obtiene el listado de Confirmations
      public getAll(){
        return collectionData(this.recordCollection, { idField: 'id'}) as Observable<ServiceI[]>;
      }
  
      // Actualiza la Confirmation en firebase.
      update(record: ServiceI) {
        const documentReference = doc(
          this.firestore,
          `services/${record?.id}`
        );
        return updateDoc(documentReference, { ...record });
      }
    
      // Elimina la confimacion de Firebase.
      delete(id: string) {
        const documentReference = doc(this.firestore, `services/${id}`);
        return deleteDoc(documentReference);
      }

      
}
