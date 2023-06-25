// core 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// components





@NgModule({
  declarations: [],
  imports: [
      // core
      ReactiveFormsModule,
      FormsModule,
      CommonModule,
      HttpClientModule,

  ]
})
export class SharedModule { }
