import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { ListaPedidoVenta } from '../lista-pedido-venta/lista-pedido-venta.component';
import { ClienteService, PedidoVentaService, Pedidoventa, LoggerService } from '../shared/services/index'

@Component({
  selector: 'app-formulario-pedido-venta',
  templateUrl: './formulario-pedido-venta.component.html',
  styleUrls: ['./formulario-pedido-venta.component.css']
})
export class FormularioPedidoVenta implements OnInit {

  pedidoventa: Pedidoventa;
  pedidoventaAux: Pedidoventa;

  formularioPedidoVenta: FormGroup;

  constructor(public fb: FormBuilder, private pedidoVentaService: PedidoVentaService, private router: Router, private clienteService: ClienteService) {
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
    this.pedidoventa = this.pedidoVentaService.pedidoVentaActual;
    this.pedidoventaAux = new Pedidoventa;
  }
  ngOnInit() {
  }
  volver() {
    this.router.navigate(['listaPedidoVenta']);
  }
  save() {
    if (this.pedidoventa.idpedidoventa == -1) {
      this.pedidoventa.idpedidoventa = this.pedidoventaAux.idpedidoventa;
      this.pedidoVentaService.create(this.pedidoventa)
        .subscribe((pedidoventa: Pedidoventa) => {
          this.router.navigate(['listaPedidoVenta']);
        })
    } else {
      this.pedidoVentaService.update(this.pedidoventa)
        .subscribe((pedidoventa: Pedidoventa) => {
          this.router.navigate(['listaPedidoVenta']);
        })
    }
  }
  // datos auto-complete formulario
  opcionEstado = ['', 'Retrasado', 'En proceso', 'Finalizado', 'Cancelado'];
  opcionEntregado = ['', 'No', 'Si'];
}
