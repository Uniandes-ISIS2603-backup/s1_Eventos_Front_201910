import { Multimedia } from './multimedia';
import { Evento } from '../evento/evento';
import { Organizador } from '../organizador/organizador';
/**
* This class represents an editorialDetail of the BookStore. 
* It contains all the information relevant to the editorial.
*/
export class MultimediaDetail extends Multimedia {


    /**
     * The organizadores
     */
    organizadores: Organizador[];
    
    /**
     * The evento
     */
    evento: Evento;
}