import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { CitesRoutingModule } from './cites-routing.module';

// bootstarp
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

// Pages
import { RedesComponent } from './pages/redes/redes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { FormCitesComponent } from './components/form-cites/form-cites.component';
import { ListCitesComponent } from './components/list-cites/list-cites.component';


@NgModule({
  declarations: [
    RedesComponent,
    FilterPipe,
    // components
    FormCitesComponent,
    ListCitesComponent
  ],
  imports: [
    CommonModule,
    // routing
    CitesRoutingModule,
    // bootstarp
    NgbPaginationModule,
    // modules
    ReactiveFormsModule
  ]
})
export class CitesModule { }
