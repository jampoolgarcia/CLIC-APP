// core
import { FormControl } from "@angular/forms";

export class List {

  public filter = new FormControl('', { nonNullable: true });
	public page = 1;
	public pageSize = 5;
  
}