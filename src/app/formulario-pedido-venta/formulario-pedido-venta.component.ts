import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { ListaPedidoVenta } from '../lista-pedido-venta/lista-pedido-venta.component';
import { ClienteService, PedidoVentaService, Pedidoventa, DomicilioService, Domicilio, LoggerService, Cliente, Pedidoventadetalle, DetallePedidoVentaService, ArticuloService, Articulo } from '../shared/services/index'

@Component({
  selector: 'app-formulario-pedido-venta',
  templateUrl: './formulario-pedido-venta.component.html',
  styleUrls: ['./formulario-pedido-venta.component.css']
})
export class FormularioPedidoVenta implements OnInit {

  formularioPedidoVenta: FormGroup;
  formularioPedidoVentaDetalle: FormGroup;
  pedidoVenta: Pedidoventa = new Pedidoventa();
  pedidoVentaDetalle: Pedidoventadetalle = new Pedidoventadetalle();
  pedidosVentaDetalles: Pedidoventadetalle[] = [];
  idCliente: number;
  domicilio: Domicilio = new Domicilio();
  articulos: Articulo[] = [];

  constructor(
    public fb: FormBuilder,
    private pedidoVentaService: PedidoVentaService,
    private domicilioService: DomicilioService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private pedidoVentaDetalleService: DetallePedidoVentaService,
    private articuloService: ArticuloService
  ) {
    this.formularioPedidoVentaDetalle = this.fb.group({
      'cantidad': ['', [Validators.required]],
      'subtotal': ['', [Validators.required]],
      'porcentajeDescuento': ['', [Validators.required]],
      'articulo': ['', [Validators.required]]
    })
    this.formularioPedidoVenta = this.fb.group({
      'fechaentrega': ['', [Validators.required, Validators.pattern(/[0-9]\d|20[17]\d/)]],
      'fechapedido': ['', [Validators.required, Validators.pattern(/[0-9]\d|20[17]\d/)]],
      'estado': ['', [Validators.nullValidator]],
      'entregado': ['', [Validators.nullValidator]],
      'nropedido': ['', [Validators.required, Validators.pattern(/(?:\d*)?\d+/)]],
      'calle': ['', [Validators.required]],
      'numero': ['', [Validators.required, Validators.pattern(/(?:\d*)?\d+/)]],
      'localidad': ['', [Validators.required]],
      'latitud': ['', [Validators.required, Validators.pattern(/(?:\d*)?\d+/)]],
      'longitud': ['', [Validators.required, Validators.pattern(/(?:\d*)?\d+/)]],
      'gastoenvio': ['', [Validators.required, Validators.pattern(/(?:\d*)?\d+/)]],
    })
  }

  ngOnInit() {
    this.pedidoVenta.domicilio = this.domicilio;
    if (!this.pedidoVenta.domicilio) {
      this.pedidoVenta.domicilio = new Domicilio();
    }
    this.activatedRoute.queryParams
      .subscribe(parametros => {
        let aux: string = JSON.stringify(parametros)
        if (aux.length > 2) {
          this.idCliente = parametros.array[0];
          if (aux.length > 15) {
            let idPedidoVenta = parametros.array[1];
            this.pedidoVentaService.getPedidoVentaById(idPedidoVenta)
              .subscribe((pedidoVenta: Pedidoventa) => {
                this.pedidoVenta = pedidoVenta;
                this.listarPedidosVentaDetalle(this.pedidoVenta.idpedidoventa);
                this.listarArticulos();
              })
          }
        }
      })

  }

  volver() {
    let parametros: any[] = [];
    parametros.push(this.idCliente);
    this.router.navigate(['listaPedidoVenta'], { queryParams: { array: parametros } });
  }

  save() {
    if (!this.pedidoVenta.idpedidoventa) {
      this.pedidoVenta.idcliente = this.idCliente;
      this.domicilioService.create(this.pedidoVenta.domicilio)
        .flatMap((domicilioNuevo: Domicilio) => {
          this.pedidoVenta.iddomicilio = domicilioNuevo.iddomicilio;
          return this.pedidoVentaService.create(this.pedidoVenta)
        })
        .subscribe((pedidoventaNuevo: Pedidoventa) => {
          let parametros: any[] = [];
          parametros.push(this.idCliente);
          this.router.navigate(['listaPedidoVenta'], { queryParams: { array: parametros } });
        }, (e) => {
          if (!localStorage.getItem("pedidoVenta2")) {

            localStorage.setItem("domicilio", JSON.stringify(this.pedidoVenta.domicilio))
            localStorage.setItem("pedidoVenta2", JSON.stringify(this.pedidoVenta))
            let parametros: any[] = [];
            parametros.push(this.idCliente);
            this.router.navigate(['listaPedidoVenta'], { queryParams: { array: parametros } });
          } else {
            alert("Primero se debe sincronizar el pedido venta actual!")
          }
        })
    } else {
      /* El campo monto Total de pedido de venta será el resultante de la suma del campo subtotal + los gastos de envió. */
      this.pedidoVenta.montototal = 0;
      this.pedidoVenta.montototal = this.pedidoVenta.subtotal + this.pedidoVenta.gastosenvio
      this.pedidoVentaService.update(this.pedidoVenta)
        .flatMap((pedidoventa: Pedidoventa) => {
          return this.domicilioService.update(this.pedidoVenta.domicilio)
        })
        .subscribe((domicilio: Domicilio) => {
          let parametros: any[] = [];
          parametros.push(this.idCliente);
          this.router.navigate(['listaPedidoVenta'], { queryParams: { array: parametros } });
        })
    }
  }

  guardarDetalle() {
    this.pedidoVentaDetalle.idpedidoventa = this.pedidoVenta.idpedidoventa;
    this.pedidoVentaDetalleService.create(this.pedidoVentaDetalle)
      .subscribe((pedidoventaDetalle) => {
        /*El campo subtotal de pedido de venta será el resultante de la suma de los subtotales de los detalles del pedido.*/
        this.pedidoVenta.subtotal = (pedidoventaDetalle.subtotal * pedidoventaDetalle.cantidad) * (pedidoventaDetalle.porcentajedescuento / 100);
        this.pedidoVentaService.update(this.pedidoVenta).subscribe(() => {
          this.pedidoVentaDetalle = new Pedidoventadetalle();
          this.listarPedidosVentaDetalle(this.pedidoVenta.idpedidoventa);
        })
      })
  }

  listarPedidosVentaDetalle(idpedidoventa: number) {
    this.pedidoVentaDetalleService.getAll({ where: { idpedidoventa: idpedidoventa }, include: 'articulo' })
      .subscribe((listaPedidosVentaDetalle: Pedidoventadetalle[]) => {
        this.pedidosVentaDetalles = listaPedidosVentaDetalle;
      })
  }

  listarArticulos() {
    this.articuloService.getAll().subscribe((articulos: Articulo[]) => {
      this.articulos = articulos;
    })
  }

  /* Los valores del campo estado de pedido de venta pueden ser pendiente, enviado, entregado, anulado. */
  opcionEstado = ['', 'pendiente', 'enviado', 'entregado', 'anulado'];
  opcionEntregado = [{ nombre: '', valor: null }, { nombre: 'No', valor: 0 }, { nombre: 'Sí', value: 1 }];
}
