/* tslint:disable */

declare var Object: any;
export interface UsuarioInterface {
  "idusuario"?: number;
  "username": string;
  "password": string;
}

export class Usuario implements UsuarioInterface {
  "idusuario": number;
  "username": string;
  "password": string;
  constructor(data?: UsuarioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Usuario`.
   */
  public static getModelName() {
    return "Usuario";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Usuario for dynamic purposes.
  **/
  public static factory(data: UsuarioInterface): Usuario{
    return new Usuario(data);
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
      name: 'Usuario',
      plural: 'Usuarios',
      properties: {
        "idusuario": {
          name: 'idusuario',
          type: 'number'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
