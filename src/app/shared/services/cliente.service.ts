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
    this.clienteActual.idcliente = -1;
  }

  getAll(): Observable<Cliente[]> {
    return this.clienteApi.find();
  }

  esClienteExistente(): boolean {
    return this.clienteActual.idcliente != -1;
  }

  delete(cliente: Cliente): Observable<{}> {
    return this.clienteApi.deleteById(cliente.idcliente);
  }
}
