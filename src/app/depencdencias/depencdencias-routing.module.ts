import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepencdenciasPage } from './depencdencias.page';

const routes: Routes = [
  {
    path: '',
    component: DepencdenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepencdenciasPageRoutingModule {}
