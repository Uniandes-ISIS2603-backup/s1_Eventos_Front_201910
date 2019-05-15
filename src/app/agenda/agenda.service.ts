import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Agenda } from './agenda';
import { AgendaDetail } from './agenda-detail';

import { environment } from '../../environments/environment';

import { delay } from 'rxjs/operators';

const API_URL = environment.apiURL;
const calific = '/agendas';
const eventos = '/eventos';

/**
 * Clase service, se encarga de obtener la informacion por medio de http de la base de datos (servidor desplegado de back)
 */
@Injectable()
export class AgendaService{

    agendas: Agenda[];

    
    /**
     * Constructor de la clase service
     * @param http protocolo que se usara
     */
    constructor(private http: HttpClient) { }

    /**
   * Obtiene todos las agendas que existen en la base de datos
   */
    getAgendas(): Observable<Agenda[]> {
        return this.http.get<Agenda[]>(API_URL + calific);
    }

    addDeAcuerdo(agenda): void{
        this.http.put<Agenda[]>(API_URL + calific+'/'+agenda.id,agenda);
    }

    /**
     * Obtiene un agenda dado un id
     * @param agendaId id del medio de pago buscado
     */
    getAgendaDetail(agendaId): Observable<AgendaDetail> {
        return this.http.get<AgendaDetail>(API_URL + calific + '/' + agendaId);
    }

    
    /**
     * Crea un agenda en la base de datos
     * @param agenda  - objetoDTO de califiacion
     */
    createAgenda(agenda): Observable<Agenda> {
        return this.http.post<Agenda>(API_URL + calific, agenda);
    }

        createEventoAgenda(eventoId,agenda):Observable<Agenda>{
        console.log('ASTAROTH!');
        console.log(API_URL+'/eventos/'+eventoId+'/agendas');
        return this.http.post<Agenda>(API_URL+'/eventos/'+eventoId+'/agendas',agenda);
            
    }

    deleteAgenda(eventoId,agendaId):Observable<AgendaDetail>{
        console.log('ESTE ES EL ID A BORRAR '+agendaId);
        return this.http.delete<AgendaDetail>(API_URL+'/eventos/'+eventoId+'/agendas/'+agendaId);
    }

    /**
     * Actualiza un agenda
     * @param agenda agenda que se va a actualizar
     */
    updateAgenda(agenda): Observable<AgendaDetail>{
        return this.http.put<AgendaDetail>(API_URL+calific+'/'+agenda.id,agenda);
    }

    getEventoAgendas(eventoId):Observable<Agenda[]>{
        return this.http.get<Agenda[]>(API_URL+eventos+'/'+eventoId+'/'+'agendas');
    }


    //updateEventoAgendas(eventoId,agendas: Agenda[]): Observable<Agenda[]>{
      //  return this.http.put<Agenda[]>(API_URL+eventos+'/'+eventoId+'/'+agendas);
    //}

}