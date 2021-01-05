import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'depencdencias',
    loadChildren: () => import('./depencdencias/depencdencias.module').then( m => m.DepencdenciasPageModule)
  },
  {
    path: 'denuncia',
    loadChildren: () => import('./denuncia/denuncia.module').then( m => m.DenunciaPageModule)
  },
  {
    path: 'autoevaluacion',
    loadChildren: () => import('./autoevaluacion/autoevaluacion.module').then( m => m.AutoevaluacionPageModule)
  },
  {
    path: 'pruebas',
    loadChildren: () => import('./pruebas/pruebas.module').then( m => m.PruebasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
