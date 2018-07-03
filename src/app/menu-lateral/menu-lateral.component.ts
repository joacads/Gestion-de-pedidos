import { Component, OnInit } from '@angular/core';
import { ClienteService, PedidoVentaService, Cliente, Pedidoventa, SingletonService } from '../shared/services/index';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  constructor(private singletonService: SingletonService, private clienteService: ClienteService, private pedidoVentaService: PedidoVentaService,private router: Router) { }
  
  ngOnInit() {
  }
  
}
