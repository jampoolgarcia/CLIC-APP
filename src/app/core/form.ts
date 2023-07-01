// core
import { AbstractControl, FormGroup } from '@angular/forms';

export abstract class Form {
  public form!: FormGroup;

  public isInvalid(control: string) {
    return this.form.get(control)?.errors && this.form.get(control)?.dirty;
  }

  public isValid(control: string) {
    return !this.form.get(control)?.errors;
  }

  public getControl(control: string) {
    return this.form.get(control);
  }

  public getError(controlName: string): string {
    let error = '';
    const control: AbstractControl<any, any> | null =
      this.form.get(controlName);
    if (control?.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }

  abstract onSubmit(): void;

  abstract buildingForm(): void;
}
