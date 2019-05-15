import { Invitado } from "../invitado/invitado";
import {Ubicacion} from "../ubicacion/ubicacion";
import { Agenda } from "./agenda";


export class AgendaDetail extends Agenda {
    
    /** Los libros del agenda **/
    invitados : Invitado[];
    ubicacion:Ubicacion;
}


