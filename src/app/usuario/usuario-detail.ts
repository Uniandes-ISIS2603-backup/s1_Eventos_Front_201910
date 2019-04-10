import { Usuario } from './usuario';
import { Evento } from '../evento/evento';
import { Calificacion } from '../calificacion/calificacion';
import { Entrada } from '../entrada/entrada';
import { MedioDePago } from '../medioDePago/medioDePago';
import { Factura } from '../factura/factura';
/**
* This class represents an usuarioDetail. 
* It contains all the information relevant to the usuario.
*/
export class UsuarioDetail extends Usuario {


    /**
     * The usuario's eventos
     */
    eventos: Evento[];
    
    /**
     * The usuario's calificaciones
     */
    calificaciones: Calificacion[];
    
    /**
     * The usuario's entradas
     */
    entradas: Entrada[];
    
    /**
     * The usuario's medios de pago
     */
    mediosDePago: MedioDePago[];
    
    /**
     * The usuario's facturas
     */
    facturas: Factura[];
}
