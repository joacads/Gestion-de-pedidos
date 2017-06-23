/* tslint:disable */

declare var Object: any;
export interface DomicilioInterface {
  "iddomicilio"?: number;
  "calle"?: string;
  "numero"?: number;
  "localidad"?: string;
  "latitud"?: number;
  "longitud"?: number;
}

export class Domicilio implements DomicilioInterface {
  "iddomicilio": number;
  "calle": string;
  "numero": number;
  "localidad": string;
  "latitud": number;
  "longitud": number;
  constructor(data?: DomicilioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Domicilio`.
   */
  public static getModelName() {
    return "Domicilio";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Domicilio for dynamic purposes.
  **/
  public static factory(data: DomicilioInterface): Domicilio{
    return new Domicilio(data);
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
      name: 'Domicilio',
      plural: 'Domicilios',
      properties: {
        "iddomicilio": {
          name: 'iddomicilio',
          type: 'number'
        },
        "calle": {
          name: 'calle',
          type: 'string'
        },
        "numero": {
          name: 'numero',
          type: 'number'
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
