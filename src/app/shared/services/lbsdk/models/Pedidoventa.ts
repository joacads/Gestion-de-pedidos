/* tslint:disable */

declare var Object: any;
export interface PedidoventaInterface {
  "idpedidoventa"?: number;
  "fechaentrega"?: Date;
  "gastosenvio"?: number;
  "estado"?: string;
  "entregado"?: number;
  "fechapedido"?: Date;
  "nropedido"?: number;
  "subtotal"?: number;
  "montototal"?: number;
  "fkcliente"?: number;
  "calle"?: string;
  "numero"?: string;
  "localidad"?: string;
  "latitud"?: number;
  "longitud"?: number;
}

export class Pedidoventa implements PedidoventaInterface {
  "idpedidoventa": number;
  "fechaentrega": Date;
  "gastosenvio": number;
  "estado": string;
  "entregado": number;
  "fechapedido": Date;
  "nropedido": number;
  "subtotal": number;
  "montototal": number;
  "fkcliente": number;
  "calle": string;
  "numero": string;
  "localidad": string;
  "latitud": number;
  "longitud": number;
  constructor(data?: PedidoventaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Pedidoventa`.
   */
  public static getModelName() {
    return "Pedidoventa";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Pedidoventa for dynamic purposes.
  **/
  public static factory(data: PedidoventaInterface): Pedidoventa{
    return new Pedidoventa(data);
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
      name: 'Pedidoventa',
      plural: 'Pedidoventa',
      properties: {
        "idpedidoventa": {
          name: 'idpedidoventa',
          type: 'number'
        },
        "fechaentrega": {
          name: 'fechaentrega',
          type: 'Date'
        },
        "gastosenvio": {
          name: 'gastosenvio',
          type: 'number'
        },
        "estado": {
          name: 'estado',
          type: 'string'
        },
        "entregado": {
          name: 'entregado',
          type: 'number'
        },
        "fechapedido": {
          name: 'fechapedido',
          type: 'Date'
        },
        "nropedido": {
          name: 'nropedido',
          type: 'number'
        },
        "subtotal": {
          name: 'subtotal',
          type: 'number'
        },
        "montototal": {
          name: 'montototal',
          type: 'number'
        },
        "fkcliente": {
          name: 'fkcliente',
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
        "latitud": {
          name: 'latitud',
          type: 'number'
        },
        "longitud": {
          name: 'longitud',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
