import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'Inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'CrearClientes',
    loadChildren: () => import('./cliente/crear/cliente.crear.module').then( m => m.ClienteCrearClienteModule)
  },
  {
    path: 'LoginClientes',
    loadChildren: () => import('./cliente/login/cliente.login.module').then( m => m.ClienteLoginModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'ejemplo',
    loadChildren: () => import('./ejemplo/ejemplo.module').then( m => m.EjemploPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
