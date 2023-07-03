import { DocumentData, DocumentReference } from "firebase/firestore";

export interface UserI {
  id?: string
  fullName: string
  email: string;
  password: string;
  room: DocumentReference<DocumentData>;
  rol: DocumentReference<DocumentData>;
  status: boolean;
}
