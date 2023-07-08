// angular core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@guards/auth.guard';


const routes: Routes = [
  // rutas del modulo de autheticacion.
  {
    path: 'auth',
    loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule),
    //canActivate: [AuthGuard]
  },
  // ruta del modulo de las citas.
  {
    path: 'redes',
    loadChildren: () => import('@modules/redes/redes.module').then(m => m.RedesModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'redes'
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
