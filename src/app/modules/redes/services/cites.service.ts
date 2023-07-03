// core angular
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// firebase
import { getFirestore, doc as document, CollectionReference, DocumentData, Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';

// model
import { CiteI } from '../model/cite';
import { UsuariosService } from '@shared/services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class CitesService {

  // collection
  private citeCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore, 
              private _usuarios: UsuariosService) {
    // inializacion de coleccion
    this.citeCollection = collection(this.firestore, 'cites');
  }

  // crea una nueva cita en firebase
  public async add(cite: CiteI) {
    // obtiene los datos del usuario authenticado
    const user = await this._usuarios.getUserWithData();

    if(user){
      // añade los campos de referencia faltantes.
      cite.client = document(getFirestore(), `client/${cite.client}`);
      cite.service = document(getFirestore(), `client-services/${cite.service}`);
      cite.redes = document(getFirestore(), `usuarios/${user.id}`);
      cite.room = user.room;

      return addDoc(this.citeCollection, cite);
    }else{
      return null;
    }
    
  }

  // obtiene el listado de citas
  public getAll(){
    return collectionData(this.citeCollection, { idField: 'id'}) as Observable<CiteI[]>;
  }
}
