/* tslint:disable */

declare var Object: any;
export interface RubroInterface {
  "idrubro": number;
  "idrubropadre"?: number;
  "codigo"?: number;
  "denominacion"?: string;
  "fkrubro"?: number;
}

export class Rubro implements RubroInterface {
  "idrubro": number;
  "idrubropadre": number;
  "codigo": number;
  "denominacion": string;
  "fkrubro": number;
  constructor(data?: RubroInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Rubro`.
   */
  public static getModelName() {
    return "Rubro";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Rubro for dynamic purposes.
  **/
  public static factory(data: RubroInterface): Rubro{
    return new Rubro(data);
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
      name: 'Rubro',
      plural: 'Rubros',
      properties: {
        "idrubro": {
          name: 'idrubro',
          type: 'number'
        },
        "idrubropadre": {
          name: 'idrubropadre',
          type: 'number'
        },
        "codigo": {
          name: 'codigo',
          type: 'number'
        },
        "denominacion": {
          name: 'denominacion',
          type: 'string'
        },
        "fkrubro": {
          name: 'fkrubro',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
