import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { CitesRoutingModule } from './cites-routing.module';

// bootstarp
import { NgbActiveModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

// Pages
import { RedesComponent } from './pages/redes/redes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { FormCitesComponent } from './components/form-cites/form-cites.component';
import { ListCitesComponent } from './components/list-cites/list-cites.component';
import { CoordinatorComponent } from './pages/coordinator/coordinator.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';


@NgModule({
  declarations: [
    RedesComponent,
    FilterPipe,
    // components
    FormCitesComponent,
    ListCitesComponent,
    CoordinatorComponent
  ],
  imports: [
    CommonModule,
    // routing
    CitesRoutingModule,
    // bootstarp
    NgbPaginationModule,
    // modules
    ReactiveFormsModule,
    //Stanalone
    ConfirmationComponent
  ],
  exports: [
    ListCitesComponent
  ],
  providers: [
    NgbActiveModal,
  ]
})
export class CitesModule { }
