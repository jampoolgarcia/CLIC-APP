// angular core
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Form } from '@core/form';

// shred service
import { ToastService } from '@shared/components/toast/toast.service';
import { UserService } from '@shared/services/user.service';

// externals
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html'
})
export class SingInComponent extends Form implements OnInit {
  
  constructor(
    private _auth: UserService, 
    private fb: FormBuilder, 
    private _router: Router,
    private _toast: ToastService) { 
    super();
    this._auth.currentUser.subscribe( user =>{
       if(user) _router.navigate(['/redes/cites']); 
       else _router.navigate(['/auth/sing-in']);
    })
  }

  ngOnInit(): void {
    this.buildingForm();
  }
  
  override async onSubmit(): Promise<void> {

    const { email, password } = this.form.value;

    try {
      const {  data: { user }, error } = await this._auth.login({email, password});
      
      if(error) this._toast.show(`Obss, Ha acorrido un Error: ${error.message}`, 'danger');

      if(user){
        //console.log('user', user);
        this._toast.show('Bienvenido!!!.', 'info');
        //this._router.navigate(['/']);
      } 
    } catch (error) {
      if (error instanceof Error) {
        this._toast.show(`Obss, Ha acorrido un Error: ${error.message}`, 'danger');
      }
      console.log(error);
    } finally {
      this.form.reset();
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
