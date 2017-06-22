import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ListaClientes } from '../lista-clientes/lista-clientes.component';
import { ClienteService, Cliente, LoggerService } from '../shared/services/index';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})
export class FormularioCliente implements OnInit {

  cliente: Cliente;
  
  formularioCliente: FormGroup;
  constructor(public fb: FormBuilder, private clienteServices: ClienteService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.formularioCliente = this.fb.group({
      'razonsocial': ['', [Validators.required,]],
      'cuit': ['', [Validators.required, Validators.pattern(/\d{8}/)]],
      'calle': ['', [Validators.required]],
      'numero': ['', [Validators.required, Validators.pattern(/\d{1}/)]],
      'localidad': ['', [Validators.required,]],
    });
    this.cliente = this.clienteServices.clienteActual;
  }
  ngOnInit() {
  }
  volver() {
    this.router.navigate(['listaClientes']);
  }
  save() {
    if (this.cliente.idcliente == -1) {
      this.clienteServices.create(this.cliente)
        .subscribe((cliente: Cliente) => {
          this.router.navigate(['tablaClientes']);
        })
    } else {
      this.clienteServices.update(this.cliente)
        .subscribe((cliente: Cliente) => {
          this.router.navigate(['tablaClientes']);
        })
    }
  }
}
