// core
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

// app
import { Helpers } from '@core/helpers';
import { CiteSaveI } from '@modules/redes/model/cite';
import { Form } from '@core/form';

// service
import { CitesService } from '@modules/redes/services/cites.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

// external 
import { NgxSpinnerService } from 'ngx-spinner';






@Component({
  selector: 'app-form-cites',
  templateUrl: './form-cites.component.html'
})
export class FormCitesComponent extends Form implements OnInit {

  public client$!: Observable<ClientI[]>;
  public services$!: Observable<ServiceI[]>;
  //public user$!: Observable<UserI>;

  constructor(private fb: FormBuilder, 
    private _cites: CitesService, 
    private _user: UserService,
    private _client: ClientService,
    private _citeServices: CiteServicesService,
    private _modal: NgbModal,
    private _toast: ToastService) { 
    super();
  }
  
  ngOnInit(): void {
    this.client$ = this._client.List;
    //this.subscription.push(this.client$.subscribe());

    this.services$ = this._citeServices.List;
    //this.subscription.push(this.services$.subscribe());
   
    //this.subscription.push(this.user$.subscribe());
    
    this.buildingForm();

  }


  open(content:any) {
		this._modal.open(content);
	}

  buildingForm(): void {

    const nowDate = Helpers.getdate(new Date());

    this.form = this.fb.group({
      client_id: ['', Validators.required],
      date: [nowDate, Validators.required],
			hour: '00:00:00',
      service_id: ['', Validators.required],
			observation: ''
    });

  }


  async onSubmit(): Promise<void> {

		this.save();
		
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
      this.form.reset();
      const nowDate = Helpers.getdate(new Date());
      this.getControl('date')?.setValue(nowDate);
      this.getControl('hour')?.setValue('00:00:00');
      //   
    }

  }

  private getFormValues(): CiteSaveI {

		const citeform  = this.form.value as CiteSaveI;

    const { user_id, room_id } = this._user.getReferenData();

		let cite: CiteSaveI = {
			...citeform,
      user_id,
      room_id
		}

		return cite;

	}

}


