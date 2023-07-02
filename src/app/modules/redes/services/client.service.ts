// angular core
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// firebase
import { CollectionReference, DocumentData, Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { getFirestore, doc as document, DocumentReference, query, where, getDocs } from 'firebase/firestore';
import { Auth } from '@angular/fire/auth';

// app
import { ClientI } from '../model/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

   // collection
   private recordCollection: CollectionReference<DocumentData>;

   constructor(private readonly firestore: Firestore, private auth: Auth) {
     // inializacion de coleccion
     this.recordCollection = collection(this.firestore, 'client');
   }
 
   // crea una nueva cita en fire base
   public add(record: ClientI): Promise<DocumentReference<any>> | null {
    const userId = this.auth.currentUser?.uid || null;
    
    if(userId){
      record.user = document(getFirestore(), `usuarios/${userId}`);
      const res = addDoc(this.recordCollection, record);
      return res;
    }
      
    return null;
   }
 
   // obtiene el listado de citas
   public getAll(){
    const userId = this.auth.currentUser?.uid || null;
    const q = query(collection(this.firestore, 'client'), where('user', '==', document(getFirestore(), `usuarios/${userId}`)));
    return collectionData(q, { idField: 'id'}) as Observable<ClientI[]>;
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
