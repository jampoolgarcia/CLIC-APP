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
import { ClientServicesService } from '@modules/redes/services/client-services.service';

// shared model
import { ServiceI } from '@shared/components/service/service';
import { ClientService } from '@modules/redes/services/client.service';
import { ClientI } from '@modules/redes/model/client';


@Component({
  selector: 'app-form-cites',
  templateUrl: './form-cites.component.html',
  styleUrls: ['./form-cites.component.scss']
})
export class FormCitesComponent extends Form implements OnInit {

  public client$!: Observable<ClientI[]>;
  public services$!: Observable<ServiceI[]>;

  constructor(private fb: FormBuilder, 
    private _service: CitesService, 
    //private _serviceConfirmation: ConfirmationService,
    private _sericeClient: ClientService,
    private _serviceService: ClientServicesService,
    private _modalService: NgbModal,
    private _toastService: ToastService) { 
    super();
    this.buildingForm();
  }


  ngOnInit(): void {
    this.client$ = this._sericeClient.getAll();
    this.services$ = this._serviceService.getAll();
  }

  open(content:any) {
		this._modalService.open(content);
	}

  buildingForm(): void {
    this.form = this.fb.group({
      client: [
        '',
        [
          Validators.required,
        ],
      ],
      date: [new Date(), Validators.required],
			hour: ['', Validators.required],
      service: ['', Validators.required],
			observation: ['', Validators.required],
    });
  }

  async onSubmit(): Promise<void> {

		const cite = this.getFormValues();

    try {
      const res = await this._service.add(cite);
      if(res){
        this.form.reset();
        this._toastService.show("Se ha guardado exitosamente.", 'success');
      }
    } catch (err) {
      this._toastService.show("Obss, Ha acorrido un error al momento de guardar.", 'danger');
    }

		
  }

  private getFormValues(): CiteI {
		const {
			client,
			date,
			hour,
      service,
			observation
		} = this.form.value;

		let cite: CiteI = {
			client,
			date,
			hour,
			confirmation: '',
      service,
			observation
		}

		return cite;

	}

}


