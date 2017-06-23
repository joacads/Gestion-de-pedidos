import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { ListaPedidoVenta } from '../lista-pedido-venta/lista-pedido-venta.component';
import { ClienteService, PedidoVentaService, Pedidoventa, DomicilioService, Domicilio, LoggerService } from '../shared/services/index'

@Component({
  selector: 'app-formulario-pedido-venta',
  templateUrl: './formulario-pedido-venta.component.html',
  styleUrls: ['./formulario-pedido-venta.component.css']
})
export class FormularioPedidoVenta implements OnInit {

  formularioPedidoVenta: FormGroup;

  constructor(public fb: FormBuilder, private pedidoVentaService: PedidoVentaService, private domicilioService: DomicilioService, private router: Router, private clienteService: ClienteService) {
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
    })
  }
 ngOnInit() {
       console.log(this.clienteService.clienteActual)

    if (!this.pedidoVentaService.pedidoVentaActual.domicilio) {
      this.pedidoVentaService.pedidoVentaActual.domicilio = new Domicilio();
    }
  }
  volver() {
    this.router.navigate(['listaPedidoVenta']);
  }
  save() {
      this.pedidoVentaService.pedidoVentaActual.idcliente = this.clienteService.clienteActual.idcliente;
    if (this.pedidoVentaService.pedidoVentaActual.idpedidoventa == null) {
      this.domicilioService.create(this.pedidoVentaService.pedidoVentaActual.domicilio)
        .flatMap((domicilioNuevo: Domicilio) => {
          this.pedidoVentaService.pedidoVentaActual.iddomicilio = domicilioNuevo.iddomicilio;
          return this.pedidoVentaService.create(this.pedidoVentaService.pedidoVentaActual)
        })
        .subscribe((pedidoventaNuevo: Pedidoventa) => {
          this.pedidoVentaService.pedidoVentaActual.idpedidoventa = pedidoventaNuevo.idpedidoventa;
          this.router.navigate(['listaPedidoVenta']);
        })
    } else {
      this.pedidoVentaService.update(this.pedidoVentaService.pedidoVentaActual)
        .flatMap((pedidoventa: Pedidoventa) => {
          return this.domicilioService.update(this.pedidoVentaService.pedidoVentaActual.domicilio)
        })
        .subscribe((domicilio: Domicilio) => {
          this.router.navigate(['listaPedidoVenta']);
        })
    }
  }
  // datos auto-complete formulario
  opcionEstado = ['', 'Retrasado', 'En proceso', 'Finalizado', 'Cancelado'];
  opcionEntregado = [{nombre:'',valor:null},{nombre:'No',valor:0},{nombre:'Sí',value:1}];
}
