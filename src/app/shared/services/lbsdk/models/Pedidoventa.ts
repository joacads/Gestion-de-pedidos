/* tslint:disable */
import {
  Cliente,
  Domicilio,
  Pedidoventadetalle
} from '../index';

declare var Object: any;
export interface PedidoventaInterface {
  "idpedidoventa"?: number;
  "fechaentrega"?: Date;
  "gastosenvio"?: number;
  "estado"?: string;
  "entregado"?: any;
  "fechapedido"?: Date;
  "nropedido"?: number;
  "subtotal"?: number;
  "montototal"?: number;
  "idcliente": number;
  "iddomicilio": number;
  cliente?: Cliente;
  domicilio?: Domicilio;
  detalles?: Pedidoventadetalle[];
}

export class Pedidoventa implements PedidoventaInterface {
  "idpedidoventa": number;
  "fechaentrega": Date;
  "gastosenvio": number;
  "estado": string;
  "entregado": any;
  "fechapedido": Date;
  "nropedido": number;
  "subtotal": number;
  "montototal": number;
  "idcliente": number;
  "iddomicilio": number;
  cliente: Cliente;
  domicilio: Domicilio;
  detalles: Pedidoventadetalle[];
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
          type: 'any'
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
        "idcliente": {
          name: 'idcliente',
          type: 'number'
        },
        "iddomicilio": {
          name: 'iddomicilio',
          type: 'number'
        },
      },
      relations: {
        cliente: {
          name: 'cliente',
          type: 'Cliente',
          model: 'Cliente'
        },
        domicilio: {
          name: 'domicilio',
          type: 'Domicilio',
          model: 'Domicilio'
        },
        detalles: {
          name: 'detalles',
          type: 'Pedidoventadetalle[]',
          model: 'Pedidoventadetalle'
        },
      }
    }
  }
}
