// angular core
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// core app
import { Form } from '@core/form';
import { ConfirmationI } from '@modules/cites/model/confirmation';
import { ConfirmationService } from '@modules/cites/services/confirmation.service';
import { ToastService } from '@shared/components/toast/toast.service';

// external library and modules
import { NgbActiveModal, NgbModal, NgbModalConfig, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';


import { ServiceI } from './service';
import { ServicesService } from './services.service';


@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './service.component.html',
  imports: [NgbPaginationModule, ReactiveFormsModule, CommonModule],
  providers: [NgbModalConfig, NgbModal],
})
export class ServiceComponent extends Form implements OnInit {

  public page = 1;
	public pageSize = 5;
  public services$!: Observable<ServiceI[]>;
  public seleted: ServiceI | null = null;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private _toastService: ToastService,
    private _modalService: NgbModal,
    private _service: ServicesService) { 
      super();
      this.buildingForm();
    }

    ngOnInit(): void {
      this.services$ = this._service.getAll();
    }
  
    public open(content:any) {
      this._modalService.open(content);
    }
  
    public buildingForm(): void {
      this.form = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern(/^[A-Za-z+/0-9\s\xF1\xD1]+$/) ]],
        commission: ['', [Validators.required,  Validators.pattern(/^[0-9]+$/)]]
      })
    }
  
    public onSubmit(){

      const s = this.getFormValues();
  
      if(this.seleted === null){
        this.save(s);
      } else {
        this.update(s);
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
  
    public edit(record: ServiceI){
      this.seleted = record;
      this.form.patchValue(record);
    }
  
    private async update(s: ServiceI){
      s.id = this.seleted?.id;
      try {
        await this._service.update(s);
        this.seleted = null;
        this.form.reset();
        this._toastService.show("Se ha actualizado exitosamente.", 'success');
      } catch (err) {
        console.log(err)
        this._toastService.show("Obss, Ha acorrido un error al momento de actualizado.", 'danger');
      }
    }
  
    private async save(s: ServiceI) {
  
      try {
        const res = await this._service.add(s);
  
        if(res){
          this.form.reset();
          this._toastService.show("Se ha guardado exitosamente.", 'success');
        }
      } catch (err) {
        console.log(err)
        this._toastService.show("Obss, Ha acorrido un error al momento de guardar.", 'danger');
      }

    }

    private getFormValues(): ServiceI {
      const {
        name,
        commission
      } = this.form.value;
  
      let record: ServiceI = {
        name,
        commission
      }
  
      return record;
  
    }


}
