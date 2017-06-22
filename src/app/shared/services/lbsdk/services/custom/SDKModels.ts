/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Rubro } from '../../models/Rubro';
import { Pedidoventadetalle } from '../../models/Pedidoventadetalle';
import { Pedidoventa } from '../../models/Pedidoventa';
import { Domicilio } from '../../models/Domicilio';
import { Cliente } from '../../models/Cliente';
import { Articulo } from '../../models/Articulo';
import { Usuario } from '../../models/Usuario';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Rubro: Rubro,
    Pedidoventadetalle: Pedidoventadetalle,
    Pedidoventa: Pedidoventa,
    Domicilio: Domicilio,
    Cliente: Cliente,
    Articulo: Articulo,
    Usuario: Usuario,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
