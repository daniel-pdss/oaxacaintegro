import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoevaluacionPageRoutingModule } from './autoevaluacion-routing.module';

import { AutoevaluacionPage } from './autoevaluacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoevaluacionPageRoutingModule
  ],
  declarations: [AutoevaluacionPage]
})
export class AutoevaluacionPageModule {}
