import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Calificacion } from './calificacion';
import { CalificacionDetail } from './calificacion-detail';

import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const calificaciones = '/calificaciones';

/**
 * Clase service, se encarga de obtener la informacion por medio de http de la base de datos (servidor desplegado de back)
 */
@Injectable()
export class CalificacionService{

    /**
     * Constructor de la clase service
     * @param http protocolo que se usara
     */
    constructor(private http: HttpClient) { }

    /**
   * Obtiene todos las calificaciones que existen en la base de datos
   */
    getCalificaciones(): Observable<Calificacion[]> {
        return this.http.get<Calificacion[]>(API_URL + calificaciones);
    }

    addDeAcuerdo(calificacion): void{
        this.http.put<Calificacion[]>(API_URL + calificaciones+'/'+calificacion.id,calificacion);
    }

    /**
     * Obtiene un calificacion dado un id
     * @param calificacionId id del medio de pago buscado
     */
    getCalificacionDetail(calificacionId): Observable<CalificacionDetail> {
        return this.http.get<CalificacionDetail>(API_URL + calificaciones + '/' + calificacionId);
    }

    
    /**
     * Crea un calificacion en la base de datos
     * @param calificacion  - objetoDTO de califiacion
     */
    createCalificacion(calificacion): Observable<Calificacion> {
        return this.http.post<Calificacion>(API_URL + calificaciones, calificacion);
    }

    /**
     * Actualiza un calificacion
     * @param calificacion calificacion que se va a actualizar
     */
    updateCalificacion(calificacion): Observable<CalificacionDetail>{
        return this.http.put<CalificacionDetail>(API_URL+calificaciones+'/'+calificacion.id,calificacion);
    }

}