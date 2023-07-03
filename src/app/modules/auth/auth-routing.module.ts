// angular core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { ForgotComponent } from './pages/forgot/forgot.component';
import { RegisterComponent } from './pages/register/register.component';
import { SingInComponent } from './pages/sing-in/sing-in.component';

import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
  { 
    path: 'sing-in',
    component: SingInComponent,
  },
  { 
    path: 'forgot',
    component: ForgotComponent,
  },
  { 
    path: 'register',
    component: RegisterComponent,
    // ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sing-in'
  }
  // {
  //   path: '**',
  //   redirectTo: 'sing-in',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
