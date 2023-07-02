// core angular
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// firebase
import { CollectionReference, DocumentData, Firestore, collection, addDoc, collectionData, updateDoc, deleteDoc, doc } from '@angular/fire/firestore';


// app
import { ServiceI } from '@shared/components/service/service';

@Injectable({
  providedIn: 'root'
})
export class ClientServicesService {

  
    // collection
    private recordCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.recordCollection = collection(this.firestore, 'client-services');
  }

   // Obtiene el listado de Confirmations
   public getAll(){
    return collectionData(this.recordCollection, { idField: 'id'}) as Observable<ServiceI[]>;
  }
}
