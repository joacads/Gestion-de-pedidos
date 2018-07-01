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

    create(domicilio: Domicilio): Observable<Domicilio> {
        domicilio.iddomicilio = null;
        return this.domicilioApi.create(domicilio);
    }

    update(domicilio: Domicilio): Observable<Domicilio> {
        return this.domicilioApi.patchAttributes(domicilio.iddomicilio, domicilio);
    }

    delete(iddomicilio: number): Observable<{}> {
        return this.domicilioApi.deleteById(iddomicilio);
    }
}