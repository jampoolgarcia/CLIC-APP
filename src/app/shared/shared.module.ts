// core 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServicesComponent } from './components/services/services.component';


// components





@NgModule({
  declarations: [

  
    ServicesComponent
  ],
  imports: [
      // core
      ReactiveFormsModule,
      FormsModule,
      CommonModule,
      HttpClientModule,

  ]
})
export class SharedModule { }
