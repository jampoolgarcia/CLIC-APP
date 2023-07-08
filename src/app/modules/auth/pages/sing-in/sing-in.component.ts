import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Form } from '@core/form';
import { AuthService } from '@modules/auth/auth.service';
import { ToastService } from '@shared/components/toast/toast.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html'
})
export class SingInComponent extends Form implements OnInit {
  
  constructor(
    private _auth: AuthService, 
    private _spinner: NgxSpinnerService,
    private fb: FormBuilder, 
    private _router: Router,
    private _toast: ToastService) { 
    super();
    // this._auth.currentUser.subscribe( user =>{
    //   console.log('user', user)
    //   if(user) console.log('isUser'), _router.navigate(['/redes/cites']); 
    //   else console.log('not isUser'), _router.navigate(['/auth/sing-in']);
    // })
  }

  ngOnInit(): void {
    this.buildingForm();
  }
  
  override async onSubmit(): Promise<void> {

    this._spinner.show()
    const { email, password } = this.form.value;

    try {
      const {  data: { user }, error } = await this._auth.login({email, password});
      
      if(error) this._toast.show(`Obss, Ha acorrido un Error: ${error.message}`, 'danger');

      if(user){
        console.log('user', user);
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
    } finally {
      this._spinner.hide();
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
