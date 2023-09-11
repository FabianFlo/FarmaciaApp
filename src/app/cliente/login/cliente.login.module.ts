import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteLoginRoutingModule } from './cliente.login.routing';

import { ClienteLogin } from './cliente.login';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ClienteLoginRoutingModule
  ],
  declarations: [ClienteLogin]
})
export class ClienteLoginModule {}
