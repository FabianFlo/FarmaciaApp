import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteLogin } from './cliente.login';

const routes: Routes = [
  {
    path: '',
    component: ClienteLogin
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteLoginRoutingModule {}