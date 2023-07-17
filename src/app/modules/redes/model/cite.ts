export interface CiteViewI extends CiteI {
  client: string;
  //confirmation?: string;
  service?: string;
  room?: string;
  user?: string;
}

export interface CiteSaveI extends CiteI {
  client_id?: string;
  service_id: string;
  //confirmation_id?: string;
  room_id: string;
  user_id: string
}


export interface CiteI {
  id?: string;
	hour?: string;
  date: Date;
  observation?: string;
}


