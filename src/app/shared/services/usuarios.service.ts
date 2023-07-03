import { Injectable } from '@angular/core';

// firebase
import { Auth } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { UserI } from '@modules/auth/model/user';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private _auth: Auth, private readonly firestore: Firestore) { }

  async getUserWithData(){
    try {
      const { uid, displayName, email }  = this._auth.currentUser!;

      // Obtiene la referencia al documento de usuario
      const usuarioRef = doc(this.firestore, 'usuarios', uid);
  
      // Obtiene los datos del documento de usuario desde Firestore
      const usuarioSnapshot = await getDoc(usuarioRef);
      if (usuarioSnapshot.exists()) {
        const { rol, room, status } = usuarioSnapshot.data();
        const u: UserI = {
          id: uid,
          fullName:  displayName!,
          email: email!,
          password: '',
          rol,
          room,
          status
        }
        return u;
      } else {
        throw new Error('El usuario no existe');
      }
    } catch (err) {
      console.error('Error al obtener el usuario:', err);
      return null;
    }
  }
}
