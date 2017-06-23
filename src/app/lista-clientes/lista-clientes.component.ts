import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService, Cliente, LoggerService } from '../shared/services/index';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientes implements OnInit {

  listaCliente: Cliente[];
  constructor(private clienteService: ClienteService, private log: LoggerService, private router: Router) { }

  ngOnInit() {
    this.recargarListaClientes();
  }

  private recargarListaClientes() {
    this.clienteService.getAll().subscribe((clientes: Cliente[]) => {
      this.listaCliente = clientes
    })
  }

  agregar() {
    let cliente: Cliente = new Cliente();
    this.clienteService.clienteActual.idcliente = -1;
    this.clienteService.clienteActual = cliente;
    this.router.navigate(['formularioCliente']);
  }
  editar() {
    if (this.clienteService.esClienteExistente()) {
      this.router.navigate(['formularioCliente']);
    } else {
      alert("Seleccionar un cliente!");
    }
  }
  delete() {
    if (this.clienteService.esClienteExistente()) {
      this.clienteService.delete(this.clienteService.clienteActual).subscribe(() => {
        this.recargarListaClientes();
      })
    } else {
      alert("Seleccionar un cliente!");
    }
  }

  onRowSelect(event) {
    this.clienteService.clienteActual = <Cliente>event.data;
  }

  pedidoVenta() {
    if (this.clienteService.esClienteExistente()) {
      this.router.navigate(['listaPedidoVenta']);
    } else {
      alert("Seleccionar un cliente!");
    }
  }
}
