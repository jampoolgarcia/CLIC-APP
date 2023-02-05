// core 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// material module
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// components





@NgModule({
  declarations: [],
  imports: [
      // core
      ReactiveFormsModule,
      FormsModule,
      CommonModule,
      HttpClientModule,

      // material and flexLayout
      MaterialModule,
      FlexLayoutModule,
  ]
})
export class SharedModule { }
