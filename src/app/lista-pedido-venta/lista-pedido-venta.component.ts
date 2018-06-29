import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { PedidoVentaService, Pedidoventa, LoggerService, ClienteService, Cliente } from '../shared/services/index';

@Component({
  selector: 'app-lista-pedido-venta',
  templateUrl: './lista-pedido-venta.component.html',
  styleUrls: ['./lista-pedido-venta.component.css']
})

export class ListaPedidoVenta implements OnInit {

  listaPedidoVenta: Pedidoventa[] = [];
  pedidoVenta: Pedidoventa = new Pedidoventa();
  cliente: Cliente = new Cliente();

  constructor(
    private pedidoVentaService: PedidoVentaService,
    private log: LoggerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe
    this.activatedRoute.queryParams
      .subscribe(parametros => {
        let aux: string = JSON.stringify(parametros)
        if (aux.length > 2) {
          let idCliente = parametros.array[0];
          this.clienteService.getClienteById(idCliente)
            .subscribe((cliente: Cliente) => {
              this.cliente = cliente;
              this.listarPedidosVentaPorId(this.cliente.idcliente);
            })
        }
      })
  }

  listarPedidosVentaPorId(id: Number) {
    this.pedidoVentaService.getAll({ where: { idcliente: id } })
      .subscribe((pedidoVentas: Pedidoventa[]) => {
        console.log(pedidoVentas)
        this.listaPedidoVenta = pedidoVentas;
      })

  }

  agregar() {
    let parametros: any[] = [];
    parametros.push(this.cliente.idcliente);
    this.router.navigate(['formularioPedidoVenta'], { queryParams: { array: parametros } });
  }

  delete() {
    if (this.pedidoVenta.idpedidoventa) {
      this.pedidoVentaService.delete(this.pedidoVenta)
        .subscribe(() => {
          this.listarPedidosVentaPorId(this.cliente.idcliente);
        })
    } else {
      alert("Seleccionar un pedido de venta!");
    }
  }

  editar() {
    if (this.pedidoVenta.idpedidoventa) {
      let parametros: any[] = [];
      parametros.push(this.cliente.idcliente);
      parametros.push(this.pedidoVenta.idpedidoventa);
      this.router.navigate(['formularioPedidoVenta'], { queryParams: { array: parametros } });
    } else {
      alert("Seleccionar un pedido de venta!");
    }
  }
  onRowSelect(event) {
    this.pedidoVenta = <Pedidoventa>event.data;
  }

  volver() {
    this.router.navigate(['listaClientes']);
  }
}