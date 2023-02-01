import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/auth.service';
import { UserI } from '@modules/auth/model/user';

// external
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public userForm!: FormGroup;
  private minPassLength = 6;

  constructor(private _service: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildUserForm();
  }

  private buildUserForm() {
    this.userForm = this.fb.group({
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
      password: [
        '',
        [Validators.required, Validators.minLength(this.minPassLength)],
      ],
      rol: ['', Validators.required],
    });
  }

  register(){

    const { firstName, lastName, email, password, rol } = this.userForm.value;

    const user: UserI = {
      fullName: `${firstName} ${lastName}`,
      email: email,
      password,
      rol,
      status: false,
      room: []
    }

    const res = this._service.register(user);

    if(res != null){
      this.userForm.reset();
      Swal.fire({
        timer: 1500,
        title: '¡Buen trabajo!',
        icon: 'success'
      })
    }

  }

  public getError(controlName: string): string {
    let error = '';
    const control: AbstractControl<any, any> | null = this.userForm.get(controlName);
    if (control?.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }
}
