import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Domicilio, DomicilioApi, LoopBackConfig } from './lbsdk/index';
import { API_VERSION, BASE_URL } from '../services/lb.base.url';

@Injectable()
export class DomicilioService {

    constructor(private domicilioApi: DomicilioApi) {
        LoopBackConfig.setBaseURL(BASE_URL);
        LoopBackConfig.setApiVersion(API_VERSION);
    }
    getAll(): Observable<Domicilio[]> {
        return this.domicilioApi.find();
    }

    create(cliente: Domicilio): Observable<Domicilio> {
        return this.domicilioApi.create(cliente);
    }

    update(cliente: Domicilio): Observable<Domicilio> {
        return this.domicilioApi.patchAttributes(cliente.idcliente, cliente);
    }

    delete(cliente: Domicilio): Observable<{}> {
        return this.domicilioApi.deleteById(cliente.idcliente);
    }
}