import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientes } from './lista-clientes/lista-clientes.component';
import { FormularioCliente } from './formulario-cliente/formulario-cliente.component';
import { ListaPedidoVenta } from './lista-pedido-venta/lista-pedido-venta.component';
import { FormularioPedidoVenta } from './formulario-pedido-venta/formulario-pedido-venta.component';
import { ListaArticulos } from './lista-articulos/lista-articulos.component';
import { FormularioArticulo } from './formulario-articulo/formulario-articulo.component';
import { ListaRubros } from './lista-rubros/lista-rubros.component';
import { FormularioRubro } from './formulario-rubro/formulario-rubro.component';

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
  {
    path: 'formularioPedidoVenta',
    component: FormularioPedidoVenta
  },
  {
    path: 'listaArticulos',
    component: ListaArticulos
  },
  {
    path: 'formularioArticulo',
    component: FormularioArticulo
  },
  {
    path: 'listaRubros',
    component: ListaRubros
  },
  {
    path: 'formularioRubro',
    component: FormularioRubro
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
