import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PedidoventaApi, Pedidoventa, Domicilio, LoopBackConfig } from '../services/lbsdk/index';
import { API_VERSION, BASE_URL } from '../services/lb.base.url';

@Injectable()
export class PedidoVentaService {

  public pedidoVentaActual: Pedidoventa = new Pedidoventa();
  public inludedObject: any = { include: 'domicilio' };

  constructor(private pedidoVentaApi: PedidoventaApi) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
    this.pedidoVentaActual.domicilio = new Domicilio();
  }

  getAll(): Observable<Pedidoventa[]> {
    return this.pedidoVentaApi.find();
  }
  getByClientId(idcliente: number): Observable<Pedidoventa[]> {
    return this.pedidoVentaApi.find({ where: { idcliente: idcliente } });
  }
  getPedidoVentaById(id: number): Observable<Pedidoventa> {
    return this.pedidoVentaApi.findById(id);
  }
  create(pedidoVenta: Pedidoventa): Observable<Pedidoventa> {
    return this.pedidoVentaApi.create(pedidoVenta);
  }
  update(pedidoVenta: Pedidoventa): Observable<Pedidoventa> {
    return this.pedidoVentaApi.patchAttributes(pedidoVenta.idpedidoventa, pedidoVenta);
  }
  delete(pedidoVenta: Pedidoventa): Observable<{}> {
    return this.pedidoVentaApi.deleteById(pedidoVenta.idpedidoventa);
  }
  espedidoVentaExistente(): boolean {
    return this.pedidoVentaActual.idpedidoventa != -1;
  }
}
