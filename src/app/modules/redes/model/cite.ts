import { DocumentData, DocumentReference } from "firebase/firestore";

export interface CiteI {
  id?: string;
  client: string;
	hour: string;
  date: Date;
  confirmation: string;
  observation: string;
  service: DocumentReference<DocumentData>;
  redes?: DocumentReference<DocumentData>;
  room?: DocumentReference<DocumentData>;
}
