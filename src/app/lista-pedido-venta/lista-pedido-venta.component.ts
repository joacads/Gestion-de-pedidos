import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { PedidoVentaService, Pedidoventa, LoggerService, ClienteService, Cliente, DetallePedidoVentaService, Pedidoventadetalle, DomicilioService } from '../shared/services/index';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-lista-pedido-venta',
  templateUrl: './lista-pedido-venta.component.html',
  styleUrls: ['./lista-pedido-venta.component.css']
})

export class ListaPedidoVenta implements OnInit {

  listaPedidoVenta: Pedidoventa[] = [];
  pedidoVenta: Pedidoventa = new Pedidoventa();
  cliente: Cliente = new Cliente();
  arrayObservable: Array<Observable<any>>;

  constructor(
    private pedidoVentaService: PedidoVentaService,
    private log: LoggerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private pedidoVentaDetalleService: DetallePedidoVentaService,
    private domicilioservice: DomicilioService
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

      this.pedidoVentaDetalleService.getAll({ where: { idpedidoventa: this.pedidoVenta.idpedidoventa } })
        .subscribe((listaPedidoVentaDetalle: Pedidoventadetalle[]) => {
          this.arrayObservable = new Array<Observable<any>>();
          listaPedidoVentaDetalle.forEach(pedidoVenta => {
            this.arrayObservable.push(this.pedidoVentaDetalleService.delete(pedidoVenta));
          });
          Observable.merge(this.arrayObservable)
            .subscribe(response => {
              this.pedidoVentaService.delete(this.pedidoVenta)
                .subscribe(() => {
                  this.domicilioservice.delete(this.pedidoVenta.iddomicilio)
                    .subscribe(() => {
                      this.listarPedidosVentaPorId(this.cliente.idcliente);
                    })
                })
            })
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