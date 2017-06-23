import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo, ArticuloApi, LoopBackConfig } from './lbsdk/index';
import { API_VERSION, BASE_URL } from '../services/lb.base.url';

@Injectable()
export class ArticuloService {

  public articuloActual: Articulo = new Articulo();

  constructor(private articuloApi: ArticuloApi) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
    //articulo no seleccionado
  }

  getAll(): Observable<Articulo[]> {
    return this.articuloApi.find();
  }

  create(articulo: Articulo): Observable<Articulo> {
    return this.articuloApi.create(articulo);
  }

  update(articulo: Articulo): Observable<Articulo> {
    return this.articuloApi.patchAttributes(articulo.idarticulo, articulo);
  }

  delete(articulo: Articulo): Observable<{}> {
    return this.articuloApi.deleteById(articulo.idarticulo);
  }

  esArticuloExistente(): boolean {
    return this.articuloActual.idarticulo != null;
  }
}