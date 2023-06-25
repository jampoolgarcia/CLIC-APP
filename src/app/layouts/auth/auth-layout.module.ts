import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';

import { SharedModule } from '@shared/shared.module';

import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    // Routing
    AuthRoutingModule,
<<<<<<< HEAD
    
=======

>>>>>>> confirmation-crud
  ]
})
export class AuthLayoutModule { }
