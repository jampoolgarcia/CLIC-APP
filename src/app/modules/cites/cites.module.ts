import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { CitesRoutingModule } from './cites-routing.module';

// bootstarp
import { TimepikerComponent } from '@shared/components/timepiker/timepiker.component';
import { DatepikerComponent } from '@shared/components/datepiker/datepiker.component';

// Pages
import { RedesComponent } from './pages/redes/redes.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RedesComponent
  ],
  imports: [
    CommonModule,
    // routing
    CitesRoutingModule,
    // bootstarp
    TimepikerComponent,
    DatepikerComponent,
    // modules
    ReactiveFormsModule
  ]
})
export class CitesModule { }
