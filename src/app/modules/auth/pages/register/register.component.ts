// angular core
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

// app
import { Form } from '@core/form';
import { AuthService } from '@modules/auth/auth.service';

// model 
import { UserI } from '@modules/auth/model/user';

// services
import { ToastService } from '@shared/components/toast/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent extends Form implements OnInit {
  
  private minPassLength = 6;

  constructor(private _service: AuthService, private fb: FormBuilder, private _toast: ToastService) {
    super();
  }

  ngOnInit(): void {
    this.buildingForm();
  }

  override onSubmit(): void {
    
    const user = this.getUserForm();

    try {
      const res = this._service.register(user);
      console.log(res);
      if(res != null){
        this.form.reset();
        this._toast.show('Usuario registrado exitosamente.', 'success');
      }
    } catch (err: any) {
      this._toast.show('Obs. Ha ocurrido un error al registrar el usuario.', 'danger');
      console.log(err.code);
    }

  }

  override buildingForm(): void {
    this.form = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/),
        ],
      ],
      passwordGroup: 
        this.fb.group({
          password: ['', [Validators.required,  Validators.minLength(4), Validators.maxLength(30)]],
          confirmPassword: ['', [Validators.required,  Validators.minLength(4), Validators.maxLength(30)]]
        }, 
        { validator: this.passwordMatchValidator }
      )
    });
  }

  private getUserForm(): UserI {
    const { firstName, lastName, email, password, rol } = this.form.value;
    return {
      fullName: `${firstName} ${lastName}`,
      email,
      password,
      rol,
      status: false,
      room: ''
    }
  }

  private passwordMatchValidator(fg: FormGroup) {
    if(fg.dirty){
      const { password, confirmPassword } =  fg.value;
      if (password !== confirmPassword) {
        fg.get('confirmPassword')?.setErrors({ 'mismatch': true });
      } else {
        fg.get('confirmPassword')?.setErrors({ 'mismatch': false });
      }
    }
    
  }


}
