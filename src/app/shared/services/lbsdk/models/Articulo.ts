/* tslint:disable */

declare var Object: any;
export interface ArticuloInterface {
  "idarticulo"?: number;
  "denominacion": string;
  "codigo": number;
  "preciocompra": number;
  "precioventa": number;
  "iva"?: number;
}

export class Articulo implements ArticuloInterface {
  "idarticulo": number;
  "denominacion": string;
  "codigo": number;
  "preciocompra": number;
  "precioventa": number;
  "iva": number;
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
        "denominacion": {
          name: 'denominacion',
          type: 'string'
        },
        "codigo": {
          name: 'codigo',
          type: 'number'
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
      }
    }
  }
}
