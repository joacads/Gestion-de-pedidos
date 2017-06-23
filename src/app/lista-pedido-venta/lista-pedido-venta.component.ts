import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PedidoVentaService, Pedidoventa, LoggerService, ClienteService, Cliente } from '../shared/services/index';

@Component({
  selector: 'app-lista-pedido-venta',
  templateUrl: './lista-pedido-venta.component.html',
  styleUrls: ['./lista-pedido-venta.component.css']
})

export class ListaPedidoVenta implements OnInit {

  cliente: Cliente = new Cliente();

  listaPedidoVenta: Pedidoventa[];
  constructor(private pedidoVentaService: PedidoVentaService, private log: LoggerService, private router: Router, private clienteService: ClienteService) {
  }
  ngOnInit() {
    this.ObtenerCliente();
    this.recargarPedidoVentasDelCliente();
  }

  private ObtenerCliente() {
    if (this.clienteService.esClienteExistente()) {
      this.clienteService.getClienteById(this.clienteService.clienteActual.idcliente)
        .subscribe((cliente: Cliente) => {
          this.cliente = cliente;
        })
    }
  }
  private recargarPedidoVentasDelCliente() {
    if (this.clienteService.esClienteExistente()) {
      this.pedidoVentaService.getByClientId(this.clienteService.clienteActual.idcliente)
        .subscribe((pedidoVenta: Pedidoventa[]) => {
          this.listaPedidoVenta = pedidoVenta;
        })
    }
  }

  agregar() {
    let pedidoVenta: Pedidoventa = new Pedidoventa();
    pedidoVenta.idpedidoventa = -1;
    this.pedidoVentaService.pedidoVentaActual = pedidoVenta;
    this.router.navigate(['formularioPedidoVenta']);
  }

  delete() {
    if (this.pedidoVentaService.espedidoVentaExistente()) {
      this.pedidoVentaService.delete(this.pedidoVentaService.pedidoVentaActual)
      .subscribe(() => {
        this.recargarPedidoVentasDelCliente();
      })
    } else {
      alert("Seleccionar un pedido de venta!");
    }
  }

  editar() {
    if (this.pedidoVentaService.espedidoVentaExistente()) {
      this.router.navigate(['formularioPedidoVenta']);
    } else {
      alert("Seleccionar un pedido de venta!");
    }
  }
  onRowSelect(event) {
    this.pedidoVentaService.pedidoVentaActual = <Pedidoventa>event.data;
  }
  volver() {
    this.router.navigate(['listaClientes']);
  }
}
