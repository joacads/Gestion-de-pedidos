import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, ClienteApi, LoopBackConfig } from './lbsdk/index';
import { API_VERSION, BASE_URL } from '../services/lb.base.url';

@Injectable()
export class ClienteService {

  public clienteActual: Cliente = new Cliente();

  constructor(private clienteApi: ClienteApi) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);

    //cliente no seleccionado
    this.clienteActual.idcliente = -1;
  }

  getAll(): Observable<Cliente[]> {
    return this.clienteApi.find();
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.clienteApi.findById(id);
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
