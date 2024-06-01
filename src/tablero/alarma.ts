import IMostrable from "./IMostrable";
import Mensaje from "./mensaje";

export default class Alarma implements IMostrable{

    private _mensaje : Mensaje;

    constructor (mensaje : Mensaje){
        this._mensaje = mensaje;
    }

    public mostrar():string{
        const ahora = new Date;
        return this._mensaje.cuerpo + " fecha: " + ahora;

    }
    
    private enviar(casilla : string[]){
        casilla.push(this.mostrar());
    }
}