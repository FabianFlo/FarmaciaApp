import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteCrear } from './cliente.crear';

const routes: Routes = [
  {
    path: '',
    component: ClienteCrear
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteCrearRoutingModule {}