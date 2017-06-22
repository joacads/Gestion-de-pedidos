import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientes } from './lista-clientes/lista-clientes.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ListaClientes
  },
  {
    path: 'listaClientes',
    component: ListaClientes
  },
];
export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule { }
