// core angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

// core app
import { Form } from '@core/form';
import { ClientI } from '@modules/redes/model/client';
import { ClientService } from '@modules/redes/services/client.service';
import { ToastService } from '@shared/components/toast/toast.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styles: []
})
export class FormClientComponent extends Form implements OnInit {
  
  private seleted: ClientI | null = null;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private _service: ClientService, private _toastService: ToastService) { 
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
        'generica',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/),
        ],
      ],
      lastName: [
        'generica ape',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/),
        ],
      ],
      email: [
        'generica@gmail.com',
        [
          Validators.required,
          Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/),
        ],
      ],
      phone: [
        '0424456987',
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
			firstName,
			lastName,
			email,
			phone
		}

		return cite;

	}

  private async update(){
    this.seleted! = this.getFormValues();
    try {
      const res = await this._service.update(this.seleted!);
      this.seleted = null;
      this.form.reset();
      this._toastService.show("Se ha actualizado exitosamente.", 'success');
    } catch (err) {
      console.log(err)
      this._toastService.show("Obss, Ha acorrido un error al momento de actualizado.", 'danger');
    }
  }

  private async save() {
    const record: ClientI = this.getFormValues(); 
    this.loading = true;
    try {
      console.log('record', record)
      const{ error, data, status } = await this._service.add(record);

      if (error && status !== 406) {
        throw error
      }

      console.log('data:', data);

      // if(res){
      //   this.form.reset();
      //   this._toastService.show("Se ha guardado exitosamente.", 'success');
      // }else {
      //   this._toastService.show("Obss, Ha acorrido un error al momento de guardar.", 'danger');
      // }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)
        this._toastService.show("Obss, Ha acorrido un error al momento de guardar.", 'danger');
      }
    } finally {
      this.loading = false
    }

		
  }

}
