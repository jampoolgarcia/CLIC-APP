// core
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

// app
import { Helpers } from '@core/helpers';
import { CiteSaveI } from '@modules/redes/model/cite';
import { Form } from '@core/form';

// service
import { CitesService } from '@modules/redes/services/cites.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

// rxjs
import { Observable, Subscription } from 'rxjs';

// shared service
import { ToastService } from '@shared/components/toast/toast.service';
import { CiteServicesService } from '@modules/redes/services/cite-services.service';
import { ClientService } from '@modules/redes/services/client.service';
import { UserService } from '@shared/services/user.service';

// shared model
import { ServiceI } from '@shared/components/service/service';
import { ClientI } from '@modules/redes/model/client';

// validators
import { todayHours } from '@validators/todayHours.validator';

@Component({
  selector: 'app-form-cites',
  templateUrl: './form-cites.component.html'
})
export class FormCitesComponent extends Form implements OnInit {

  public client$!: Observable<ClientI[]>;
  public services$!: Observable<ServiceI[]>;
  @Input() client!: ClientI;
  //public user$!: Observable<UserI>;

  constructor(
    public _amodal: NgbActiveModal,
    private fb: FormBuilder, 
    private _cites: CitesService, 
    private _modalService: NgbModal,
    private _user: UserService,
    private _client: ClientService,
    private _citeServices: CiteServicesService,
    private _toast: ToastService) { 
    super();
  }
  
  ngOnInit(): void {
    this.client$ = this._client.List;
    this.services$ = this._citeServices.List;
    this.buildingForm();
  }



  buildingForm(): void {
    
    this.form = this.fb.group({
     // client_id: ['', Validators.required],
     dateGroup: 
     this.fb.group({
      date: [this.date, Validators.required],
			hour: [Helpers.hoursMinutesNow(), Validators.required],
     }, { validator: todayHours }),
      service_id: ['', Validators.required],
			observation: ''
    });

  }

  async onSubmit(): Promise<void> {
    
    console.log('client:', this.client);
		// this.save();
		
  }

  private async save(){
    const cite = this.getFormValues();
    console.log(cite);
    try {
      const{ error } = await this._cites.add(cite);

      if (error) {
        this._toast.show(`Obss, Ha acorrido un error al momento de guardar. Error: ${error.message}`, 'danger');
        return console.log(`Error in ${error.message}`)
      }
     
      this._toast.show("Se ha guardado exitosamente.", 'success');
    } catch (err) {
      this._toast.show("Obss, Ha acorrido un error al momento de guardar.", 'danger');
    } finally {
      this.resetForm();
    }

  }

  private resetForm(){
    this.form.reset();
    this.getControl('date')?.setValue(this.date);
    this.getControl('hour')?.setValue(Helpers.hoursMinutesNow);
  }


  private getFormValues(): CiteSaveI {

		const citeform  = this.form.value as CiteSaveI;

    const { user_id, room_id } = this._user.referenData;

		let cite: CiteSaveI = {
			...citeform,
      user_id,
      room_id
		}

		return cite;

	}


  get date(){
    return Helpers.dateNow();
  }

}


