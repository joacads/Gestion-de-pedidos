import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientes } from './lista-clientes/lista-clientes.component';
import { FormularioCliente } from './formulario-cliente/formulario-cliente.component';
import { ListaPedidoVenta } from './lista-pedido-venta/lista-pedido-venta.component';
const appRoutes: Routes = [
  {
    path: '',
    component: ListaClientes
  },
  {
    path: 'listaClientes',
    component: ListaClientes
  },
  {
    path: 'formularioCliente',
    component: FormularioCliente
  },
  {
    path: 'listaPedidoVenta',
    component: ListaPedidoVenta
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
