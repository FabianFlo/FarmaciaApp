import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioRoutingModule } from './inicio.routing';

import { Inicio } from './inicio';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioRoutingModule
  ],
  declarations: [Inicio]
})
export class InicioPageModule {}
