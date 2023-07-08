// core angular
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// app core
import { IEntity } from '@core/entity';
import { SupabaseDB } from '@core/supabase';

// external lib
import { NgxSpinnerService } from 'ngx-spinner';
import { SupabaseClient } from '@supabase/supabase-js';


@Injectable({
  providedIn: 'root'
})
export class CiteServicesService {

  private list: IEntity[] = [];
  private $list: BehaviorSubject<IEntity[]> = new BehaviorSubject(this.list);
  private supabase: SupabaseClient;
  private TABLE = 'cite-service';

  constructor(
    private _spinner: NgxSpinnerService
  ) {
    this.supabase = SupabaseDB.getInstance();
    this.getAll();
  }

  // carga el listado
  private async getAll(){
    this._spinner.show();
    try {
         let { data, error, status } = await this.supabase
         .from(this.TABLE)
         .select(`*`);

         if (error && status !== 406) throw error;
         

         if (data) this.$list.next(data);
         
       } catch (error) {
         if (error instanceof Error) {
           alert(error.message)
         }
       } finally {
         this._spinner.hide();
       }
  }
  
  get List(){
    return this.$list.asObservable();
  }
}
