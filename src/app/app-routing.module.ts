// angular core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// firebase
import { AuthGuard, redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['redes']);

const routes: Routes = [
  // rutas del modulo de autheticacion.
  {
    path: 'auth',
    loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule),
    ...canActivate(redirectLoggedInToHome),
    //canActivate: [AuthGuard]
  },
  // ruta del modulo de las citas.
  {
    path: 'redes',
    loadChildren: () => import('@modules/redes/redes.module').then(m => m.RedesModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
   // ruta del modulo de las clientes.
   {
    path: 'client',
    loadChildren: () => import('@modules/client/client.module').then(m => m.ClientModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
