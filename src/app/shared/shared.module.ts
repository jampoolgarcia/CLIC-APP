// core 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// pipes
import { FilterPipe } from '../pipes/filter.pipe';






@NgModule({
  declarations: [
    FilterPipe
  ],
  imports: [
    // core
    CommonModule,
    RouterModule
  ],
  exports: [
    FilterPipe,
    RouterModule
  ]
})
export class SharedModule { }
