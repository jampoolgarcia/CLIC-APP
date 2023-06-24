// angular core
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

// core app
import { List } from '@core/list';
import { ConfirmationI } from '@modules/cites/model/confirmation';
import { ConfirmationService } from '@modules/cites/services/confirmation.service';

// external library and modules
import { NgbActiveModal, NgbModal, NgbModalConfig, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  imports: [NgbPaginationModule, ReactiveFormsModule, CommonModule],
  providers: [NgbModalConfig, NgbModal],
})
export class ConfirmationComponent extends List implements OnInit {

  public confirmations$!: Observable<ConfirmationI[]>;
  public name!: FormControl;

  constructor(public activeModal: NgbActiveModal,
              private _modalService: NgbModal,
              private _service: ConfirmationService) {
		super();
    this.buildingForm();
	}

  ngOnInit(): void {
    this.confirmations$ = this._service.getAll();
  }

  open(content:any) {
		this._modalService.open(content);
	}

  buildingForm(): void {
    this.name = new FormControl('',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/),
      ],
    )
  }

  async onSubmit(): Promise<void> {
		const c: ConfirmationI = {
      name: this.name.value
    }

		const res = await this._service.add(c);

		if(res){
			this.name.reset();
      Swal.fire({
        timer: 1500,
        title: '¡Buen trabajo!',
        icon: 'success'
      })
		}
  }

}
