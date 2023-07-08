
export interface ClientI {
    id?: string,
	created_at: Date | null,
    firstName: string,
	lastName: string,
	email: string,
	phone: string,
	room_id: string;
	user_id: string;
}

export class Client {
	id?: string;
    firstName!: string;
	lastName!: string;
	email!: string;
	phone!: string;
}
