import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PedidoventaApi, Pedidoventa, Domicilio, LoopBackConfig, LoopBackFilter } from '../services/lbsdk/index';
import { API_VERSION, BASE_URL } from '../services/lb.base.url';

@Injectable()
export class PedidoVentaService {

  constructor(private pedidoVentaApi: PedidoventaApi) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
  }

  getAll(filter?: LoopBackFilter): Observable<Pedidoventa[]> {
    return this.pedidoVentaApi.find(filter);
  }
  getByClientId(idcliente: number): Observable<Pedidoventa[]> {
    return this.pedidoVentaApi.find({ where: { idcliente: idcliente }, include: 'domicilio' });
  }
  getPedidoVentaById(id: number): Observable<Pedidoventa> {
    return this.pedidoVentaApi.findById(id, { include: 'domicilio' });
  }
  create(pedidoVenta: Pedidoventa): Observable<Pedidoventa> {
    pedidoVenta.entregado = pedidoVenta.entregado;
    return this.pedidoVentaApi.create(pedidoVenta);
  }
  update(pedidoVenta: Pedidoventa): Observable<Pedidoventa> {
    return this.pedidoVentaApi.patchAttributes(pedidoVenta.idpedidoventa, pedidoVenta);
  }
  delete(pedidoVenta: Pedidoventa): Observable<{}> {
    return this.pedidoVentaApi.deleteById(pedidoVenta.idpedidoventa);
  }
}
