import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PedidoventadetalleApi, Pedidoventadetalle, LoopBackConfig } from '../services/lbsdk/index';
import { API_VERSION, BASE_URL } from '../services/lb.base.url';

@Injectable()
export class DetallePedidoVentaService {

  public pedidoVentaDetalleActual: Pedidoventadetalle = new Pedidoventadetalle();
  constructor(private pedidoVentaDetalleeApi: PedidoventadetalleApi) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
  }
  getAll(): Observable<Pedidoventadetalle[]> {
    return this.pedidoVentaDetalleeApi.find();
  }
  getByClientId(idcliente: number): Observable<Pedidoventadetalle[]> {
    return this.pedidoVentaDetalleeApi.find({ where: { idcliente: idcliente } });
  }
  getPedidoVentaById(id: number): Observable<Pedidoventadetalle> {
    return this.pedidoVentaDetalleeApi.findById(id);
  }
  create(pedidoVenta: Pedidoventadetalle): Observable<Pedidoventadetalle> {
    return this.pedidoVentaDetalleeApi.create(pedidoVenta);
  }
  update(pedidoVenta: Pedidoventadetalle): Observable<Pedidoventadetalle> {
    return this.pedidoVentaDetalleeApi.patchAttributes(pedidoVenta.idpedidoventadetalle, pedidoVenta);
  }
  delete(pedidoVenta: Pedidoventadetalle): Observable<{}> {
    return this.pedidoVentaDetalleeApi.deleteById(pedidoVenta.idpedidoventadetalle);
  }
  espedidoVentaExistente(): boolean {
    return this.pedidoVentaDetalleActual.idpedidoventadetalle != null;
  }
}
