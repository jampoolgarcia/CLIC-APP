// core
import { FormGroup } from "@angular/forms";

export abstract class Form {

  public form!: FormGroup;

  public isInvalid(control: string) {
		return (this.form.get(control)?.errors && this.form.get(control)?.dirty);
	}

	public isValid(control: string){
		return !this.form.get(control)?.errors;
	}

	public getControl(control: string){
		return this.form.get(control);
	}

  abstract onSubmit(): void;

  abstract buildingForm(): void;


}