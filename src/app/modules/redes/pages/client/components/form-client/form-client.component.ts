// core angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

// core app
import { Form } from '@core/form';
import { ClientI } from '@modules/redes/model/client';
import { ClientService } from '@modules/redes/services/client.service';
import { ToastService } from '@shared/components/toast/toast.service';

// external
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styles: []
})
export class FormClientComponent extends Form implements OnInit {
  
  private seleted: ClientI | null = null;

  constructor(private fb: FormBuilder, private _service: ClientService, private _toast: ToastService) { 
    super();
  }

  ngOnInit(): void {
    this.buildingForm();
  }
    
  override onSubmit(): void {
    if(this.seleted === null){
      this.save();
    } else {
      this.update();
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
      phone: [
        '',
        [Validators.required, Validators.minLength(3),
        Validators.pattern(/^[0-9]{7,11}$/),],
      ],
    });
  }

  private getFormValues(): ClientI {
		const {
			firstName,
			lastName,
			email,
			phone
		} = this.form.value;

		let cite: ClientI = {
      created_at: new Date(),
			firstName,
			lastName,
			email,
			phone,
      room_id: '1',
      user_id: '53245f08-616a-4e63-aef2-7982e7df559c'
		}

		return cite;

	}

  private async update(){
    this.seleted! = this.getFormValues();
    try {
      const res = await this._service.update(this.seleted!);
      this.seleted = null;
      this.form.reset();
      this._toast.show("Se ha actualizado exitosamente.", 'success');
    } catch (err) {
      console.log(err)
      this._toast.show("Obss, Ha acorrido un error al momento de actualizado.", 'danger');
    }
  }

  private async save() {
    const record: ClientI = this.getFormValues(); 
    try {
     
      const{ error } = await this._service.add(record);

      if (error) {
        this._toast.show(`Obss, Ha acorrido un error al momento de guardar. Error: ${error.message}`, 'danger');
        return console.log(`Error in ${error.message}`)
      }

      this._toast.show("Se ha guardado exitosamente.", 'success');
    
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)
        this._toast.show(`Obss, Ha acorrido un error al momento de guardar. Error: ${error.message}`, 'danger');
      }
    } finally {
      this.form.reset();
      //   
    }

		
  }

}
