import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoevaluacionPage } from './autoevaluacion.page';

const routes: Routes = [
  {
    path: '',
    component: AutoevaluacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoevaluacionPageRoutingModule {}
