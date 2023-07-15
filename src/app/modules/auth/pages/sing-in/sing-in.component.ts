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
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent extends Form implements OnInit {
  
  constructor(
    private _auth: UserService, 
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

    const user = await this._auth.login({email, password});
    this.form.reset();
    if(user) this._toast.show('Bienvenido!!!.', 'info');
  
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
