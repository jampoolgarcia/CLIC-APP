import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Form } from '@core/form';
import { AuthService } from '@modules/auth/auth.service';
import { ToastService } from '@shared/components/toast/toast.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html'
})
export class SingInComponent extends Form implements OnInit {
  
  constructor(
    private _service: AuthService, 
    private fb: FormBuilder, 
    private _router: Router,
    private _toast: ToastService) { 
    super();
  }

  ngOnInit(): void {
    this.buildingForm();
  }
  
  override async onSubmit(): Promise<void> {
    const { email, password } = this.form.value;

    try {
      const res = await this._service.login({email, password});
      this._toast.show('Bienvenido!!!.', 'info');
      this._router.navigate(['/redes/cites']);
      this.form.reset();
    } catch (err: any) {
      let msg = '';
       
      switch(err.code) {
        case 'auth/user-not-found': 
          msg = "Usuario y clave invalido.";
          break;
        case 'auth/wrong-password':
          msg = "Usuario y clave invalido.";
          break;
        default: 
          msg = 'Error desconocido.';
      }

      console.log(err.code);
      this._toast.show(msg, 'danger');

    }
  
  }


  override buildingForm(): void {
    this.form = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/),
        ],
      ],
      password: [
        '',
        [Validators.required],
      ],
    });
  }

}
