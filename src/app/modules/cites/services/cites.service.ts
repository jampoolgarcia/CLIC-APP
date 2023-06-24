// core angular
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// firebase
import { CollectionReference, DocumentData, Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';

// model
import { CiteI } from '../model/cite';

@Injectable({
  providedIn: 'root'
})
export class CitesService {

  // collection
  private citeCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    // inializacion de coleccion
    this.citeCollection = collection(this.firestore, 'cites');
  }

  // crea una nueva cita en fire base
  public add(cite: CiteI) {
    return addDoc(this.citeCollection, cite);
  }

  // obtiene el listado de citas
  public getAll(){
    return collectionData(this.citeCollection, { idField: 'id'}) as Observable<CiteI[]>;
  }
}
