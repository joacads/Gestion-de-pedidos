import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { ListaClientes } from '../lista-clientes/lista-clientes.component';
import { ClienteService, Cliente, DomicilioService, Domicilio, LoggerService } from '../shared/services/index';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})
export class FormularioCliente implements OnInit {

  formularioCliente: FormGroup;
  cliente: Cliente = new Cliente();

  constructor(public fb: FormBuilder,
    private clienteServices: ClienteService,
    private domicilioService: DomicilioService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.formularioCliente = this.fb.group({
      'razonsocial': ['', [Validators.required,]],
      'cuit': ['', [Validators.required, Validators.pattern(/\d{1}/)]],
      'calle': ['', [Validators.required]],
      'numero': ['', [Validators.required, Validators.pattern(/\d{1}/)]],
      'localidad': ['', [Validators.required,]],
    });
  }
  ngOnInit() {
    this.cliente.domicilio = new Domicilio();
    this.activatedRoute.queryParams
      .subscribe(parametros => {
        let aux: string = JSON.stringify(parametros)
        if (aux.length > 2) {
          let id = parametros.array[0]
          this.clienteServices.getClienteById(id)
            .subscribe((cliente: Cliente) => {
              this.cliente = cliente
            })
        }
      })
  }

  volver() {
    this.router.navigate(['listaClientes']);
  }
  save() {
    if (!this.cliente.idcliente) {
      this.domicilioService.create(this.cliente.domicilio)
        .flatMap((domicilioNuevo: Domicilio) => {
          this.cliente.iddomicilio = domicilioNuevo.iddomicilio;
          return this.clienteServices.create(this.cliente)
        })
        .subscribe((clienteNuevo: Cliente) => {
          this.router.navigate(['listaClientes']);
        })
    } else {
      this.clienteServices.update(this.cliente)
        .flatMap((cliente: Cliente) => {
          return this.domicilioService.update(this.cliente.domicilio)
        })
        .subscribe((domicilio: Domicilio) => {
          this.router.navigate(['listaClientes']);
        })
    }
  }
}
