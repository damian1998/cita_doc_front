import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./publico/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./publico/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'citas',
    loadChildren: () => import('./privado/citas/citas.module').then( m => m.CitasPageModule)
  },
  {
    path: 'doctores',
    loadChildren: () => import('./privado/doctores/doctores.module').then( m => m.DoctoresPageModule)
  },
  {
    path: 'agendar',
    loadChildren: () => import('./privado/agendar/agendar.module').then( m => m.AgendarPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./privado/perfil/perfil.module').then( m => m.PerfilPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}