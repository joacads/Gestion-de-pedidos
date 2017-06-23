import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, ClienteApi, Domicilio, LoopBackConfig } from './lbsdk/index';
import { API_VERSION, BASE_URL } from '../services/lb.base.url';
import "rxjs/add/operator/mergeMap";

@Injectable()
export class ClienteService {

  public clienteActual: Cliente = new Cliente();
  public inludedObject: any = { include: 'domicilio' };

  constructor(private clienteApi: ClienteApi) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
    this.clienteActual.domicilio = new Domicilio();
  }

  getAll(): Observable<Cliente[]> {
    return this.clienteApi.find(this.inludedObject);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.clienteApi.findById(id, this.inludedObject);
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.clienteApi.create(cliente);
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.clienteApi.patchAttributes(cliente.idcliente, cliente);
  }

  delete(cliente: Cliente): Observable<{}> {
    return this.clienteApi.deleteById(cliente.idcliente);
  }

  esClienteExistente(): boolean {
    return this.clienteActual.idcliente != -1;
  }

}
