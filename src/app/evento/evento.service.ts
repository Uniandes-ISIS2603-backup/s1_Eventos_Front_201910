import { Injectable } from '@angular/core';

import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Evento } from './evento';
import {EventoDetail}from './evento-detail';


import { environment } from '../../environments/environment';
import { Calificacion } from '../calificacion/calificacion';
const API_URL = environment.apiURL;
const eventos = '/eventos';

/**
* The service provider for everything related to eventos
*/

@Injectable()
export class EventoService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
    /**
    * Returns the Observable object containing the list of eventos retrieved from the API
    * @returns The list of eventos in real time
    */
    getEventos(): Observable<Evento[]> {
        return this.http.get<Evento[]>(API_URL + eventos);
    }
    /**
    * Returns the Observable object containing the evento retrieved from the API
    * @returns The evento
    */
    getEvento(eventoId): Observable<Evento> {
        return this.http.get<Evento>(API_URL + eventos + '/' + eventoId);
    }
    /**
    * Updates an Evento
    * @param evento The Evento which will be update
    * @returns The confirmation of the Evento's update
    */
    updateEvento(evento):Observable<Evento>{
        return this.http.put<Evento>(API_URL + eventos + '/' + evento.id,evento)
    }
    /**
    * Creates an Evento
    * @param evento The Evento which will be created
    * @returns The confirmation of the Evento's creation
    */
    createEvento(evento): Observable<Evento> {
        return this.http.post<Evento>(API_URL + eventos, evento);
    }

     /**
    * Returns the Observable object with the details of an agenda retrieved from the API
    * @returns The agenda details
    */
   getEventoDetail(evento_id): Observable<EventoDetail> {
    return this.http.get<EventoDetail>(API_URL + eventos + '/' + evento_id);
    }

}
