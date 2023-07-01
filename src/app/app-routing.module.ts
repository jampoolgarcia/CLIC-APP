import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // rutas del modulo de autheticacion.
  {
    path: 'auth',
    loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule),
    //canActivate: [AuthGuard]
  },
  // ruta del modulo de las citas.
  {
    path: 'cites',
    loadChildren: () => import('@modules/cites/cites.module').then(m => m.CitesModule),
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
