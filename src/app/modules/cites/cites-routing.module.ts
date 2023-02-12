import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoordinatorComponent } from './pages/coordinator/coordinator.component';

import { RedesComponent } from './pages/redes/redes.component';

const routes: Routes = [ 
  {
    path: 'redes',
    component: RedesComponent,
  },
  {
    path: 'coordianator',
    component: CoordinatorComponent,
  },
  {
    path: '',
    component: RedesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitesRoutingModule { }
