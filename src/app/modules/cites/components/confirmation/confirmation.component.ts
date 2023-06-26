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
  public seleted: ConfirmationI | null = null;

  constructor(public activeModal: NgbActiveModal,
              private _modalService: NgbModal,
              private _service: ConfirmationService) {
		super();
    this.buildingForm();
	}

  ngOnInit(): void {
    this.confirmations$ = this._service.getAll();
  }

  public open(content:any) {
		this._modalService.open(content);
	}

  private buildingForm(): void {
    this.name = new FormControl('',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/),
      ],
    )
  }

  public onSubmit(){

    if(this.seleted === null){
      this.save();
    } else {
      this.update();
    }
		
  }

  public async delete(id: string){
    try {
      const res = await this._service.delete(id);
    } catch (err) {
      console.log(err)
      throw new Error ("Error al intetar eliminar la entidad confirmacion.");
    }
  
   
  }

  public edit(record: ConfirmationI){
    this.seleted = record;
    this.name.setValue(record.name);
  }

  private async update(){
    this.seleted!.name = this.name.value;
    try {
      const res = await this._service.update(this.seleted!);
      this.seleted = null;
      this.name.reset();
    } catch (err) {
      console.log(err)
      throw new Error ("Error al intetar actualizar la entidad confirmacion.");
    }
  }

  private async save() {
    const c: ConfirmationI = {
      name: this.name.value
    }

    try {
      const res = await this._service.add(c);

      if(res){
        this.name.reset();
        Swal.fire({
          timer: 1500,
          title: '¡Buen trabajo!',
          icon: 'success'
        })
      }
    } catch (err) {
      console.log(err)
      throw new Error ("Error al intetar guardar la entidad confirmacion.");
    }

		
  }

}
