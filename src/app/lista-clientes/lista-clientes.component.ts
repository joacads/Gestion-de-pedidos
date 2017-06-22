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
    this.recargarEstados();
  }

  private recargarEstados() {
    this.clienteService.getAll().subscribe((clientes: Cliente[]) => {
      this.listaCliente = clientes
    })
  }

  agregar() {
    let cliente: Cliente = new Cliente();
    cliente.idcliente = -1;
    this.clienteService.clienteActual = cliente;
    this.router.navigate(['formularioCliente']);
  }
  delete() {
    if (this.clienteService.esClienteExistente()) {
      this.clienteService.delete(this.clienteService.clienteActual).subscribe(() => {
        this.recargarEstados();
      })
    } else {
      alert("Seleccionar un cliente!");
    }
  }

  onRowSelect(event) {
    this.clienteService.clienteActual = <Cliente>event.data;
  }


  pedidoVenta(){
    if (this.clienteService.esClienteExistente()) {
      this.router.navigate(['listaPedidoVenta']);
    } else {
      alert("Seleccionar un cliente!");
    }
  }
}
