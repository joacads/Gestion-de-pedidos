/* tslint:disable */
import {
  Rubro
} from '../index';

declare var Object: any;
export interface ArticuloInterface {
  "idarticulo"?: number;
  "idrubro": number;
  "denominacion": string;
  "codigo": string;
  "preciocompra": number;
  "precioventa": number;
  "iva"?: number;
  rubro?: Rubro;
}

export class Articulo implements ArticuloInterface {
  "idarticulo": number;
  "idrubro": number;
  "denominacion": string;
  "codigo": string;
  "preciocompra": number;
  "precioventa": number;
  "iva": number;
  rubro: Rubro;
  constructor(data?: ArticuloInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Articulo`.
   */
  public static getModelName() {
    return "Articulo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Articulo for dynamic purposes.
  **/
  public static factory(data: ArticuloInterface): Articulo{
    return new Articulo(data);
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
      name: 'Articulo',
      plural: 'Articulos',
      properties: {
        "idarticulo": {
          name: 'idarticulo',
          type: 'number'
        },
        "idrubro": {
          name: 'idrubro',
          type: 'number'
        },
        "denominacion": {
          name: 'denominacion',
          type: 'string'
        },
        "codigo": {
          name: 'codigo',
          type: 'string'
        },
        "preciocompra": {
          name: 'preciocompra',
          type: 'number'
        },
        "precioventa": {
          name: 'precioventa',
          type: 'number'
        },
        "iva": {
          name: 'iva',
          type: 'number'
        },
      },
      relations: {
        rubro: {
          name: 'rubro',
          type: 'Rubro',
          model: 'Rubro'
        },
      }
    }
  }
}
