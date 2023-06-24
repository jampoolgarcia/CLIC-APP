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
  {
    path: '**',
    redirectTo: 'cites'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
