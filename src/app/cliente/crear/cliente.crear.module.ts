import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteCrearRoutingModule } from './cliente.crear.routing';
import { ClienteCrear } from './cliente.crear';
@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      IonicModule,
      ClienteCrearRoutingModule
    ],
   declarations: [ClienteCrear]
  })
  export class ClienteCrearClienteModule {}