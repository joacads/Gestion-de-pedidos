import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rubro, RubroApi, LoopBackConfig } from './lbsdk/index';
import { API_VERSION, BASE_URL } from '../services/lb.base.url';

@Injectable()
export class RubroService {

  public rubroActual: Rubro = new Rubro();

  constructor(private rubroApi: RubroApi) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
    //rubro no seleccionado
    this.rubroActual.idrubro = -1;
  }

  getAll(): Observable<Rubro[]> {
    return this.rubroApi.find();
  } 
  
  create(rubro: Rubro): Observable<Rubro> {
    return this.rubroApi.create(rubro);
  }

  update(rubro: Rubro): Observable<Rubro> {
    return this.rubroApi.patchAttributes(rubro.idrubro, rubro);
  }

  delete(rubro: Rubro): Observable<{}> {
    return this.rubroApi.deleteById(rubro.idrubro);
  }
  esRubroExistente(): boolean {
    return this.rubroActual.idrubro != -1;
  }
}