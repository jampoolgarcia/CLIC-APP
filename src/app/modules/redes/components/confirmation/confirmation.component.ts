// angular core
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

// core app
import { List } from '@core/list';
import { ConfirmationI } from '@modules/redes/model/confirmation';
import { ConfirmationService } from '@modules/redes/services/confirmation.service';
import { ToastService } from '@shared/components/toast/toast.service';

// external library and modules
import { NgbActiveModal, NgbModal, NgbModalConfig, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

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
              private _toastService: ToastService,
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
      this._toastService.show("Se ha eliminado exitosamente.", 'success');
    } catch (err) {
      this._toastService.show("Obss, Ha acorrido un error al momento de guardar.", 'danger');
      console.log(err)
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
      this._toastService.show("Se ha actualizado exitosamente.", 'success');
    } catch (err) {
      console.log(err)
      this._toastService.show("Obss, Ha acorrido un error al momento de actualizado.", 'danger');
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
        this._toastService.show("Se ha guardado exitosamente.", 'success');
      }
    } catch (err) {
      console.log(err)
      this._toastService.show("Obss, Ha acorrido un error al momento de guardar.", 'danger');
    }

		
  }

  public isInvalid() {
		return (this.name.errors && this.name.dirty);
	}

  public isValid(){
		return !this.name.errors;
	}


    
}
