/* tslint:disable */

declare var Object: any;
export interface ClienteInterface {
  "idcliente": number;
  "razonsocial"?: string;
  "cuit"?: number;
  "saldo"?: number;
  "calle"?: string;
  "numero"?: string;
  "localidad"?: string;
}

export class Cliente implements ClienteInterface {
  "idcliente": number;
  "razonsocial": string;
  "cuit": number;
  "saldo": number;
  "calle": string;
  "numero": string;
  "localidad": string;
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
        "razonsocial": {
          name: 'razonsocial',
          type: 'string'
        },
        "cuit": {
          name: 'cuit',
          type: 'number'
        },
        "saldo": {
          name: 'saldo',
          type: 'number'
        },
        "calle": {
          name: 'calle',
          type: 'string'
        },
        "numero": {
          name: 'numero',
          type: 'string'
        },
        "localidad": {
          name: 'localidad',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
