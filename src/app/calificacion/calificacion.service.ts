import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Calificacion } from './calificacion';
import { CalificacionDetail } from './calificacion-detail';

import { environment } from '../../environments/environment';

import { delay } from 'rxjs/operators';

const API_URL = environment.apiURL;
const calific = '/calificaciones';
const eventos = '/eventos';

/**
 * Clase service, se encarga de obtener la informacion por medio de http de la base de datos (servidor desplegado de back)
 */
@Injectable()
export class CalificacionService{

    calificaciones: Calificacion[];

    
    /**
     * Constructor de la clase service
     * @param http protocolo que se usara
     */
    constructor(private http: HttpClient) { }

    /**
   * Obtiene todos las calificaciones que existen en la base de datos
   */
    getCalificaciones(): Observable<Calificacion[]> {
        return this.http.get<Calificacion[]>(API_URL + calific);
    }

    addDeAcuerdo(calificacion): void{
        this.http.put<Calificacion[]>(API_URL + calific+'/'+calificacion.id,calificacion);
    }

    /**
     * Obtiene un calificacion dado un id
     * @param calificacionId id del medio de pago buscado
     */
    getCalificacionDetail(calificacionId): Observable<CalificacionDetail> {
        return this.http.get<CalificacionDetail>(API_URL + calific + '/' + calificacionId);
    }

    
    /**
     * Crea un calificacion en la base de datos
     * @param calificacion  - objetoDTO de califiacion
     */
    createCalificacion(calificacion): Observable<Calificacion> {
        return this.http.post<Calificacion>(API_URL + calific, calificacion);
    }

        createEventoCalificacion(eventoId,calificacion):Observable<Calificacion>{
        console.log('ASTAROTH!');
        console.log(API_URL+'/eventos/'+eventoId+'/calificaciones');
        return this.http.post<Calificacion>(API_URL+'/eventos/'+eventoId+'/calificaciones',calificacion);
            
    }

    deleteCalificacion(eventoId,calificacionId):Observable<CalificacionDetail>{
        console.log('ESTE ES EL ID A BORRAR '+calificacionId);
        return this.http.delete<CalificacionDetail>(API_URL+'/eventos/'+eventoId+'/calificaciones/'+calificacionId);
    }

    /**
     * Actualiza un calificacion
     * @param calificacion calificacion que se va a actualizar
     */
    updateCalificacion(eventoId, calificacionId,calificacion): Observable<Calificacion>{
        console.log('LLEGA AQUI EL PERRROOOOPO RORO -------------');
        console.log('EVENTO ID: '+eventoId);
        console.log('NUMEROOSDOAIDO'+calificacion.estrellas);
        console.log('CALIFICACION ID: '+calificacionId);
        console.log('calificacionnnnnnn:'+calificacion.comentario);
        return this.http.put<Calificacion>(API_URL+'/eventos/'+eventoId+'/calificaciones/'+calificacion.id,calificacion);
    }

    getEventoCalificaciones(eventoId):Observable<Calificacion[]>{
        return this.http.get<Calificacion[]>(API_URL+eventos+'/'+eventoId+'/'+'calificaciones');
    }

}