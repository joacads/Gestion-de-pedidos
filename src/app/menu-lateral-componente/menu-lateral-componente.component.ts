import { Component, OnInit } from '@angular/core';
import { ClienteService, PedidoVentaService, Cliente, Pedidoventa } from '../shared/services/index';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-lateral-componente',
  templateUrl: './menu-lateral-componente.component.html',
  styleUrls: ['./menu-lateral-componente.component.css']
})
export class MenuLateralComponenteComponent implements OnInit {

  constructor(private clienteService: ClienteService, private pedidoVentaService: PedidoVentaService,private router: Router) { }
  
  ngOnInit() {
  }
  irListaClientes() {
    let cliente= new Cliente();
    let pedidoventa = new Pedidoventa();
    cliente.idcliente = -1;
    pedidoventa.idpedidoventa = -1;
    this.clienteService.clienteActual = cliente;
    this.pedidoVentaService.pedidoVentaActual = pedidoventa;
    this.router.navigate(['listaClientes'])
  }
}
