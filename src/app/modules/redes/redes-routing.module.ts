import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CitesComponent } from './pages/cites/cites.component';
import { ClientComponent } from './pages/client/client.component';

const routes: Routes = [
  {
    path: 'cites',
    component: CitesComponent,
  },
  {
    path: 'client',
    component: ClientComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cites'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedesRoutingModule { }
