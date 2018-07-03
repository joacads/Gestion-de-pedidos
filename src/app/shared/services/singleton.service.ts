import { Injectable } from '@angular/core';

@Injectable()
export class SingletonService {

  public isMobile: boolean;
  public clienteValidacion: boolean = true; 
  public pedidosVentaValidacion: boolean = true; 

  constructor() { }

}
