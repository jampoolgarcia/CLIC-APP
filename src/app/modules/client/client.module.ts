// angular core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// ng-bootstrap
import { NgbActiveModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

// routing
import { ClientRoutingModule } from './cites-routing.module';

// shared module
import { SharedModule } from '@shared/shared.module';

// components
import { ClientComponent } from './pages/client/client.component';
import { FormClientComponent } from './components/form-client/form-client.component';
import { ListClientComponent } from './components/list-client/list-client.component';







@NgModule({
  declarations: [
    ClientComponent,
    FormClientComponent,
    ListClientComponent
  ],
  imports: [
    CommonModule,
    // routing
    ClientRoutingModule,
    // bootstarp
    NgbPaginationModule,
    // modules
    ReactiveFormsModule,
    // shared
    SharedModule
  ],
  providers: [
    NgbActiveModal,
  ]
})
export class ClientModule { }
