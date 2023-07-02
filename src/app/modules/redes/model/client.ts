import { DocumentData, DocumentReference } from "firebase/firestore";

export interface ClientI {
    id?: string,
    firstName: string,
	lastName: string,
	email: string,
	phone: string,
	user?: DocumentReference<DocumentData>,
  	room?: DocumentReference<DocumentData>
}
