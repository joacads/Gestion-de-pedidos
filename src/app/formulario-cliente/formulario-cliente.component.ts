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

  constructor(public fb: FormBuilder, private clienteServices: ClienteService, private domicilioService: DomicilioService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.formularioCliente = this.fb.group({
      'razonsocial': ['', [Validators.required,]],
      'cuit': ['', [Validators.required, Validators.pattern(/\d{1}/)]],
      'calle': ['', [Validators.required]],
      'numero': ['', [Validators.required, Validators.pattern(/\d{1}/)]],
      'localidad': ['', [Validators.required,]],
    });
  }
  ngOnInit() {
    if(!this.clienteServices.clienteActual.domicilio){
      this.clienteServices.clienteActual.domicilio = new Domicilio({iddomicilio:-1});
    }
  }

  volver() {
    this.router.navigate(['listaClientes']);
  }
  save() {
    if (this.clienteServices.clienteActual.idcliente == -1) {
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
        .subscribe((cliente: Cliente) => {
          this.router.navigate(['listaClientes']);
        })
    }
  }
}
