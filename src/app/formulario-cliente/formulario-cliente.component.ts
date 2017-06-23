import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ListaClientes } from '../lista-clientes/lista-clientes.component';
import { ClienteService, Cliente, DomicilioService, Domicilio, LoggerService } from '../shared/services/index';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})
export class FormularioCliente implements OnInit {

  formularioCliente: FormGroup;
  cliente: Cliente;

  constructor(public fb: FormBuilder, private clienteServices: ClienteService, private domicilioService: DomicilioService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.formularioCliente = this.fb.group({
      'razonsocial': ['', [Validators.required,]],
      'cuit': ['', [Validators.required, Validators.pattern(/\d{1}/)]],
      'calle': ['', [Validators.required]],
      'numero': ['', [Validators.required, Validators.pattern(/\d{1}/)]],
      'localidad': ['', [Validators.required,]],
    });
    this.cliente = new Cliente();
  }
  ngOnInit() {
    if (!this.clienteServices.clienteActual.domicilio) {
      this.clienteServices.clienteActual.domicilio = new Domicilio();
    }
  }

  volver() {
    this.router.navigate(['listaClientes']);
  }
  save() {
    if (this.clienteServices.clienteActual.idcliente == null) {
      this.clienteServices.clienteActual.idcliente = this.cliente.idcliente;
      this.domicilioService.create(this.clienteServices.clienteActual.domicilio)
        .flatMap((domicilioNuevo: Domicilio) => {
          this.clienteServices.clienteActual.iddomicilio = domicilioNuevo.iddomicilio;
          return this.clienteServices.create(this.clienteServices.clienteActual)
        })
        .subscribe((clienteNuevo: Cliente) => {
          this.clienteServices.clienteActual.idcliente = clienteNuevo.idcliente;
          this.router.navigate(['listaClientes']);
        })
    } else {
      this.clienteServices.update(this.clienteServices.clienteActual)
        .flatMap((cliente: Cliente) => {
          return this.domicilioService.update(this.clienteServices.clienteActual.domicilio)
        })
        .subscribe((domicilio: Domicilio) => {
          this.router.navigate(['listaClientes']);
        })
    }
  }
}
