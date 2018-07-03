import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService, Cliente, PedidoVentaService, Pedidoventa, SingletonService } from '../shared/services/index';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientes implements OnInit {

  listaCliente: Cliente[];
  cliente: Cliente = new Cliente();

  constructor(
    private singletonService: SingletonService,
    private clienteService: ClienteService,
    private pedidoventaService: PedidoVentaService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.recargarListaClientes();
  }

  private recargarListaClientes() {
    this.clienteService.getAll()
      .subscribe((clientes: Cliente[]) => {
        this.listaCliente = clientes;
        if (this.singletonService.isMobile) {
          localStorage.removeItem("clientes")
          localStorage.setItem("clientes", JSON.stringify(clientes))
        }
      }, (e)=> {
        this.listaCliente = JSON.parse( localStorage.getItem("clientes") )
      })
  }

  agregar() {
    let cliente: Cliente = new Cliente();
    this.router.navigate(['formularioCliente']);
  }

  editar() {
    if (this.cliente.idcliente) {
      let parametros: any[] = [];
      parametros.push(this.cliente.idcliente);
      this.router.navigate(['formularioCliente'], { queryParams: { array: parametros } });
    } else {
      alert("Seleccionar un cliente!");
    }
  }

  delete() {
    if (this.cliente.idcliente) {
      this.clienteService.delete(this.cliente)
        .subscribe(() => {
          this.recargarListaClientes();
        })
    } else {
      alert("Seleccionar un cliente!");
    }
  }

  onRowSelect(event) {
    this.cliente = <Cliente>event.data;
  }

  onRowUnselect(event) {
    this.cliente = new Cliente();
  }

  pedidoVenta() {
    if (this.cliente.idcliente) {
      let parametros: any[] = [];
      parametros.push(this.cliente.idcliente);
      this.router.navigate(['listaPedidoVenta'], { queryParams: { array: parametros } });
    } else {
      alert("Seleccionar un cliente!");
    }
  }

  calcularSaldo() {
    /* El campo saldo del Cliente deberá calcularse según los pedidos asociados que 
    posea siendo negativo el saldo cuando posea pedidos cuyo estado es pendiente o enviado. 
    El saldo nunca debe ser mayor a cero. */
    if (this.cliente.idcliente) {
      this.pedidoventaService.getByClientId(this.cliente.idcliente)
        .subscribe((listaPedidosVenta: Pedidoventa[]) => {
          let saldoAux = 0;
          listaPedidosVenta.forEach(pedidoventa => {
            if (pedidoventa.estado == "pendiente" || pedidoventa.estado == "enviado") {
              saldoAux = - pedidoventa.montototal;
            }
          });
          this.cliente.saldo = saldoAux;
          this.clienteService.update(this.cliente)
            .subscribe(() => {
              this.cliente = new Cliente();
              this.recargarListaClientes
            })
        })
    } else {
      alert("Seleccionar un cliente!");
    }
  }
}
