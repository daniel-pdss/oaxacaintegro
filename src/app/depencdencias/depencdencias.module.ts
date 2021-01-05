import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepencdenciasPageRoutingModule } from './depencdencias-routing.module';

import { DepencdenciasPage } from './depencdencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepencdenciasPageRoutingModule
  ],
  declarations: [DepencdenciasPage]
})
export class DepencdenciasPageModule {}
