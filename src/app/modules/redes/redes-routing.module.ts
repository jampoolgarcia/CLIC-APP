import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CitesComponent } from './pages/cites/cites.component';

const routes: Routes = [
  {
    path: 'cites',
    component: CitesComponent,
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
