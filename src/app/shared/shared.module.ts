// core 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// pipes
import { FilterPipe } from '../pipes/filter.pipe';





@NgModule({
  declarations: [
    FilterPipe
  ],
  imports: [
    // core
    CommonModule
  ],
  exports: [
    FilterPipe
  ]
})
export class SharedModule { }
