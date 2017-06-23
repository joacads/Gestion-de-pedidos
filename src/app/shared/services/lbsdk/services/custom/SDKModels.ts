/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Articulo } from '../../models/Articulo';
import { Cliente } from '../../models/Cliente';
import { Pedidoventa } from '../../models/Pedidoventa';
import { Pedidoventadetalle } from '../../models/Pedidoventadetalle';
import { Usuario } from '../../models/Usuario';
import { Rubro } from '../../models/Rubro';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Articulo: Articulo,
    Cliente: Cliente,
    Pedidoventa: Pedidoventa,
    Pedidoventadetalle: Pedidoventadetalle,
    Usuario: Usuario,
    Rubro: Rubro,
    
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
