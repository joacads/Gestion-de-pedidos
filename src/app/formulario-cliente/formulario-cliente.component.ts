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

  cliente: Cliente;
  clienteAux: Cliente;
  domicilio: Domicilio;
  domicilioAux: Domicilio;

  formularioCliente: FormGroup;

  constructor(public fb: FormBuilder, private clienteServices: ClienteService, private domicilioService: DomicilioService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.formularioCliente = this.fb.group({
      'razonsocial': ['', [Validators.required,]],
      'cuit': ['', [Validators.required, Validators.pattern(/\d{1}/)]],
      'calle': ['', [Validators.required]],
      'numero': ['', [Validators.required, Validators.pattern(/\d{1}/)]],
      'localidad': ['', [Validators.required,]],
    });
    this.cliente = this.clienteServices.clienteActual;
    this.clienteAux = new Cliente();
    this.domicilio = new Domicilio();
    this.domicilioAux = new Domicilio();
  }
  ngOnInit() {
  }

  volver() {
    this.router.navigate(['listaClientes']);
  }
  save() {
    if (this.cliente.idcliente == -1) {
      this.cliente.idcliente = this.clienteAux.idcliente;
      this.domicilioService.create(this.domicilio)
        .flatMap((domicilioNuevo: Domicilio) => {
          this.cliente.iddomicilio = domicilioNuevo.iddomicilio;
          return this.clienteServices.create(this.cliente)
        })
        .subscribe((clienteNuevo: Cliente) => {
          this.router.navigate(['listaClientes']);
        })

    } else {
      this.clienteServices.update(this.cliente)
        .subscribe((cliente: Cliente) => {
          this.router.navigate(['listaClientes']);
        })
    }
  }
}
