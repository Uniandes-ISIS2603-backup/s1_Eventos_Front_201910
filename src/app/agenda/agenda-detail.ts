import { Invitado } from "../invitado/invitado";

import { Agenda } from "./agenda";

export class AgendaDetail extends Agenda {
    
    /** Los libros del agenda **/
    invitados : Invitado[];
}


