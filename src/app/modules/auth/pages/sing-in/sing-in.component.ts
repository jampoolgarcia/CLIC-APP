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
      const { data, error } = await this._service.login({email, password});

      console.log('data', data);
      
      if(error) this._toast.show(`Obss, Ha acorrido un Error: ${error.message}`, 'danger');

      if(data.user){
        console.log('user', data.user);
        this._toast.show('Bienvenido!!!.', 'info');
      } 
      // this._toast.show('Bienvenido!!!.', 'info');
      // this._router.navigate(['/redes/cites']);
      // this.form.reset();
    } catch (error) {
      if (error instanceof Error) {
        this._toast.show(`Obss, Ha acorrido un Error: ${error.message}`, 'danger');
      }
      console.log(error);
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
