// core angular
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

// firebase
import { getFirestore, doc as document, CollectionReference, DocumentData, Firestore, collection, addDoc, collectionData, query, where, getDocs } from '@angular/fire/firestore';

// model
import { CiteI } from '../model/cite';
import { UsuariosService } from '@shared/services/usuarios.service';
import { Helpers } from '@core/helpers';

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
      cite.client = document(this.firestore, `client/${cite.client}`);
      cite.service = document(this.firestore, `client-services/${cite.service}`);
      cite.redes = document(this.firestore, `usuarios/${user.id}`);
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

  // obtiene el listado de citas del usuario
  public async getAllForRedes(userId: string){
    // Realiza la consulta para obtener las citas del usuario
    const citasCollectionRef = collection(this.firestore, 'citas');
    const q = query(citasCollectionRef, where('usuario', '==', Helpers.obtenerReferenciaUsuario(userId)));
    //const citasSnapshot = await getDocs(q);
    (collectionData(q, { idField: 'id'}) as Observable<CiteI[]>).pipe(
      map((cites: CiteI[]) => {

       // Procesa los resultados y obtén los datos de cada cita
       const citas = [];

       return cites.map( async c => {
        
         // Obtiene los documentos relacionados utilizando las referencias
         const [usuarioData, clienteData, roomData, servicioData] = await Promise.all([
          Helpers.obtenerDocumento(c.redes!),
          Helpers.obtenerDocumento(c.client!),
          Helpers.obtenerDocumento(c.room!),
          Helpers.obtenerDocumento(c.service!)
         ]);
 
         const cita = {
           id: c.id,
           usuario: usuarioData,
           cliente: clienteData,
           room: roomData,
           servicio: servicioData,
           // Otros campos de la cita que desees incluir
         };
         citas.push(cita);
       });

       return citas;
    }));
    
  }
}
