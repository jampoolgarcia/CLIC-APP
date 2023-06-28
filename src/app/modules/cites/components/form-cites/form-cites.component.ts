// core
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

// app
import { CiteI } from '@modules/cites/model/cite';
import { Form } from '@core/form';




// service
import { CitesService } from '@modules/cites/services/cites.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// rxjs
import { Observable } from 'rxjs';

// shared service
import { ToastService } from '@shared/components/toast/toast.service';
import { ServicesService } from '@shared/components/service/services.service';
import { ConfirmationService } from '@modules/cites/services/confirmation.service';

// shared model
import { ConfirmationI } from '@modules/cites/model/confirmation';
import { ServiceI } from '@shared/components/service/service';


@Component({
  selector: 'app-form-cites',
  templateUrl: './form-cites.component.html',
  styleUrls: ['./form-cites.component.scss']
})
export class FormCitesComponent extends Form implements OnInit {

  public confirmations$!: Observable<ConfirmationI[]>;
  public services$!: Observable<ServiceI[]>;

  constructor(private fb: FormBuilder, 
    private _service: CitesService, 
    private _serviceConfirmation: ConfirmationService,
    private _serviceService: ServicesService,
    private _modalService: NgbModal,
    private _toastService: ToastService) { 
    super();
    this.buildingForm();
  }


  ngOnInit(): void {
    this.confirmations$ = this._serviceConfirmation.getAll();
    this.services$ = this._serviceService.getAll();
  }

  open(content:any) {
		this._modalService.open(content);
	}

  buildingForm(): void {
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
      dateOfBirth: ['', Validators.required],
			hour: ['', Validators.required],
			confirmation: ['', Validators.required],
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
			firstName,
			lastName,
			email,
			phone,
			dateOfBirth,
			hour,
			confirmation,
      service,
			observation
		} = this.form.value;

		let cite: CiteI = {
			redes : "test redes",
			firstName,
			lastName,
			email,
			phone,
			dateOfBirth,
			hour,
			confirmation,
      service,
			observation,
			room: "test room"
		}

		return cite;

	}

}


