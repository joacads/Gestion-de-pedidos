/* tslint:disable */
import {
  Pedidoventa,
  Domicilio
} from '../index';

declare var Object: any;
export interface ClienteInterface {
  "idcliente"?: number;
  "iddomicilio": number;
  "razonsocial": string;
  "cuit"?: string;
  "saldo"?: number;
  pedidos?: Pedidoventa[];
  domicilio?: Domicilio;
}

export class Cliente implements ClienteInterface {
  "idcliente": number;
  "iddomicilio": number;
  "razonsocial": string;
  "cuit": string;
  "saldo": number;
  pedidos: Pedidoventa[];
  domicilio: Domicilio;
  constructor(data?: ClienteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Cliente`.
   */
  public static getModelName() {
    return "Cliente";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Cliente for dynamic purposes.
  **/
  public static factory(data: ClienteInterface): Cliente{
    return new Cliente(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Cliente',
      plural: 'Clientes',
      properties: {
        "idcliente": {
          name: 'idcliente',
          type: 'number'
        },
        "iddomicilio": {
          name: 'iddomicilio',
          type: 'number'
        },
        "razonsocial": {
          name: 'razonsocial',
          type: 'string'
        },
        "cuit": {
          name: 'cuit',
          type: 'string'
        },
        "saldo": {
          name: 'saldo',
          type: 'number'
        },
      },
      relations: {
        pedidos: {
          name: 'pedidos',
          type: 'Pedidoventa[]',
          model: 'Pedidoventa'
        },
        domicilio: {
          name: 'domicilio',
          type: 'Domicilio',
          model: 'Domicilio'
        },
      }
    }
  }
}
