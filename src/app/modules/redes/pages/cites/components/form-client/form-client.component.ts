// core angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// core app
import { Form } from '@core/form';
import { Helpers } from '@core/helpers';
import { ClientI } from '@modules/redes/model/client';
import { ClientService } from '@modules/redes/services/client.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '@shared/components/toast/toast.service';
import { UserService } from '@shared/services/user.service';


@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styles: []
})
export class FormClientComponent extends Form implements OnInit {
  
  private seleted: ClientI | null = null;

  constructor(
    private fb: FormBuilder,
    private _modal: NgbModal, 
    private _user: UserService,
    private _client: ClientService, 
    private _toast: ToastService) { 
    super();
  }

  ngOnInit(): void {
    this.buildingForm();
  }

  public open(content:any) {
		this._modal.open(content);
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
          Validators.pattern(Helpers.letters),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.pattern(Helpers.letters),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(Helpers.email),
        ],
      ],
      phone: [
        '',
        [Validators.required, Validators.minLength(3),
        Validators.pattern(Helpers.phone)],
      ],
    });
  }

  private getFormValues(): ClientI {
		const clientForm = this.form.value as ClientI;

    const { user_id, room_id } = this._user.referenData;

		let cite: ClientI = {
      ...clientForm,
      room_id,
      user_id
		}

		return cite;

	}

  private async update(){
    this.seleted! = this.getFormValues();
    try {
      const res = await this._client.update(this.seleted!);
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
     
      const{ error } = await this._client.add(record);

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
      this._modal.dismissAll();
    }

		
  }


}
