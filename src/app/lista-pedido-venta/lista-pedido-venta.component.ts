import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { PedidoVentaService, Pedidoventa, LoggerService, ClienteService, Cliente, DetallePedidoVentaService, Pedidoventadetalle, DomicilioService, SingletonService, Domicilio } from '../shared/services/index';
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
  sinConexion: boolean = false;

  constructor(
    private pedidoVentaService: PedidoVentaService,
    private log: LoggerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private pedidoVentaDetalleService: DetallePedidoVentaService,
    private domicilioservice: DomicilioService,
    private singletonService: SingletonService
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
              this.sinConexion = false;
              this.cliente = cliente;
              this.listarPedidosVentaPorId(this.cliente.idcliente);
            }, () => {
              this.listarPedidosVentaPorId(idCliente);
            })
        }
      })
  }

  listarPedidosVentaPorId(id: Number) {
    this.pedidoVentaService.getAll({ where: { idcliente: id } })
      .subscribe((pedidoVentas: Pedidoventa[]) => {
        this.listaPedidoVenta = pedidoVentas;
        if (this.singletonService.isMobile) {
          localStorage.removeItem("pedidosVenta")
          localStorage.setItem("pedidosVenta", JSON.stringify(pedidoVentas))
        }
      }, (e) => {
        this.sinConexion = true;
        this.listaPedidoVenta = JSON.parse(localStorage.getItem("pedidosVenta"))
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
          let arrayObservable: Array<Observable<any>> = new Array<Observable<any>>();
          listaPedidoVentaDetalle.forEach(pedidoVenta => {
            arrayObservable.push(this.pedidoVentaDetalleService.delete(pedidoVenta));
          });
          Observable.forkJoin(arrayObservable)
            .subscribe((res: any[]) => {
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

  sincronizar() {
    if (localStorage.getItem("pedidoVenta2") && localStorage.getItem("pedidoVenta2").length > 2) {
      let pedidoVenta2: Pedidoventa = JSON.parse(localStorage.getItem("pedidoVenta2"));
      let domicilio: Domicilio = JSON.parse(localStorage.getItem("domicilio"));
      this.domicilioservice.create(domicilio)
        .flatMap((domicilioNuevo: Domicilio) => {
          pedidoVenta2.iddomicilio = domicilioNuevo.iddomicilio;
          pedidoVenta2.idcliente = this.cliente.idcliente;
          console.log(pedidoVenta2)
          return this.pedidoVentaService.create(pedidoVenta2)
        })
        .subscribe((pedidoventaNuevo: Pedidoventa) => {
          localStorage.removeItem("domicilio");
          localStorage.removeItem("pedidoVenta2");
          this.listarPedidosVentaPorId(this.cliente.idcliente);
        }, (e) => {
          alert("No hay conexion!");
        })
    } else {
      alert("No hay datos para sincronizar!");
    }
  }
}