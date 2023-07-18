// angular core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// router
import { RedesRoutingModule } from './redes-routing.module';

// bootstarp
import { NgbActiveModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

// shared
import { ConfirmationComponent } from '../redes/components/confirmation/confirmation.component';
import { ServiceComponent } from '@shared/components/service/service.component';
import { SharedModule } from '@shared/shared.module';

// pages
import { CitesComponent } from './pages/cites/cites.component';

// components
import { FormCitesComponent } from './pages/cites/components/form-cites/form-cites.component';
import { ListCitesComponent } from './pages/cites/components/list-cites/list-cites.component';
import { ListClientComponent } from './pages/cites/components/list-client/list-client.component';
import { FormClientComponent } from './pages/cites/components/form-client/form-client.component';




@NgModule({
  declarations: [
    // pages
    CitesComponent,

    // components
    FormCitesComponent,
    ListCitesComponent,
    FormClientComponent,
    ListClientComponent

    
  ],
  imports: [
    CommonModule,
    RedesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
     // bootstarp
    NgbPaginationModule,
    // shared
    SharedModule,
    ConfirmationComponent,
    ServiceComponent
  ],
  exports: [
    ListCitesComponent
  ],
  providers: [
    NgbActiveModal,
  ]
})
export class RedesModule { }
