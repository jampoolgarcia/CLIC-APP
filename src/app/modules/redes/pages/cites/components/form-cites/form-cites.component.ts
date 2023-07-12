// core
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

// app
import { CiteI } from '@modules/redes/model/cite';
import { Form } from '@core/form';

// service
import { CitesService } from '@modules/redes/services/cites.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// rxjs
import { Observable } from 'rxjs';

// shared service
import { ToastService } from '@shared/components/toast/toast.service';
import { CiteServicesService } from '@modules/redes/services/cite-services.service';
import { ClientService } from '@modules/redes/services/client.service';

// shared model
import { ServiceI } from '@shared/components/service/service';
import { ClientI } from '@modules/redes/model/client';
import { Helpers } from '@core/helpers';




@Component({
  selector: 'app-form-cites',
  templateUrl: './form-cites.component.html'
})
export class FormCitesComponent extends Form implements OnInit {

  public client$: Observable<ClientI[]> = new Observable;
  public services$!: Observable<ServiceI[]>;

  constructor(private fb: FormBuilder, 
    private _cites: CitesService, 
    //private _serviceConfirmation: ConfirmationService,
    private _client: ClientService,
    private _citeServices: CiteServicesService,
    private _modal: NgbModal,
    private _toast: ToastService) { 
    super();
  }


  ngOnInit(): void {
    this.client$ = this._client.List;
    this.services$ = this._citeServices.List;
    this.buildingForm();

  }

  open(content:any) {
		this._modal.open(content);
	}

  buildingForm(): void {

    const nowDate = Helpers.getdate(new Date());

    this.form = this.fb.group({
      client: [
        '',
        [
          Validators.required,
        ],
      ],
      date: [nowDate, Validators.required],
			hour: ['', Validators.required],
      service: ['', Validators.required],
			observation: ['', Validators.required],
    });

  }


  async onSubmit(): Promise<void> {

		const cite = this.getFormValues();
    
    try {
      const res = await this._cites.add(cite);
      if(res){
        this.form.reset();
        this._toast.show("Se ha guardado exitosamente.", 'success');
      }else{
        this._toast.show("Obss, Ha acorrido un error en el proceso de guardar.", 'danger');
      }
    } catch (err) {
      this._toast.show("Obss, Ha acorrido un error al momento de guardar.", 'danger');
    }

		
  }

  private getFormValues(): CiteI {
		const {
      date,
      hour,
      observation,
      user_id,
			client_id,
      room_id,
      service_id,
		} = this.form.value;

		let cite: CiteI = {
			client: client_id,
			date,
			hour,
			confirmation: '',
      service: service_id,
			observation
		}

		return cite;

	}

}


