import { DocumentReference, doc, getDoc, getFirestore } from "@angular/fire/firestore";

export class Helpers {

    static getdate(date: Date){
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const res = `${year}-${month}-${day}`;
        return res;
    }

    static async obtenerDocumento(referencia: DocumentReference): Promise<any> {
        const documentoSnapshot = await getDoc(referencia);
        return documentoSnapshot.data();
      }
    
    static obtenerReferenciaUsuario(userId: string): DocumentReference {
        return doc(getFirestore(), 'usuarios', userId);
    }
}