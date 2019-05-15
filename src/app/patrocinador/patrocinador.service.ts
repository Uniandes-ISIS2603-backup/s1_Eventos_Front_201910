import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Patrocinador } from './patrocinador';
import { PatrocinadorDetail } from './patrocinador-detail';

import { environment } from '../../environments/environment';

import { delay } from 'rxjs/operators';

const API_URL = environment.apiURL;
const calific = '/patrocinadores';
const eventos = '/eventos';

/**
 * Clase service, se encarga de obtener la informacion por medio de http de la base de datos (servidor desplegado de back)
 */
@Injectable()
export class PatrocinadorService{

    patrocinadores: Patrocinador[];

    
    /**
     * Constructor de la clase service
     * @param http protocolo que se usara
     */
    constructor(private http: HttpClient) { }

    /**
   * Obtiene todos las patrocinadores que existen en la base de datos
   */
    getPatrocinadores(): Observable<Patrocinador[]> {
        return this.http.get<Patrocinador[]>(API_URL + calific);
    }

    addDeAcuerdo(patrocinador): void{
        this.http.put<Patrocinador[]>(API_URL + calific+'/'+patrocinador.id,patrocinador);
    }

    /**
     * Obtiene un patrocinador dado un id
     * @param patrocinadorId id del medio de pago buscado
     */
    getPatrocinadorDetail(patrocinadorId): Observable<PatrocinadorDetail> {
        return this.http.get<PatrocinadorDetail>(API_URL + calific + '/' + patrocinadorId);
    }

    
    /**
     * Crea un patrocinador en la base de datos
     * @param patrocinador  - objetoDTO de califiacion
     */
    createPatrocinador(patrocinador): Observable<Patrocinador> {
        return this.http.post<Patrocinador>(API_URL + calific, patrocinador);
    }

        createEventoPatrocinador(eventoId,patrocinador):Observable<Patrocinador>{
        console.log('ASTAROTH!');
        console.log(API_URL+'/eventos/'+eventoId+'/patrocinadores');
        return this.http.post<Patrocinador>(API_URL+'/eventos/'+eventoId+'/patrocinadores',patrocinador);
            
    }

    deletePatrocinador(eventoId,patrocinadorId):Observable<PatrocinadorDetail>{
        console.log('ESTE ES EL ID A BORRAR '+patrocinadorId);
        return this.http.delete<PatrocinadorDetail>(API_URL+'/eventos/'+eventoId+'/patrocinadores/'+patrocinadorId);
    }

    /**
     * Actualiza un patrocinador
     * @param patrocinador patrocinador que se va a actualizar
     */
    updatePatrocinador(patrocinador): Observable<PatrocinadorDetail>{
        return this.http.put<PatrocinadorDetail>(API_URL+calific+'/'+patrocinador.id,patrocinador);
    }

    getEventoPatrocinadores(eventoId):Observable<Patrocinador[]>{
        return this.http.get<Patrocinador[]>(API_URL+eventos+'/'+eventoId+'/'+'patrocinadores');
    }


    //updateEventoPatrocinadores(eventoId,patrocinadores: Patrocinador[]): Observable<Patrocinador[]>{
      //  return this.http.put<Patrocinador[]>(API_URL+eventos+'/'+eventoId+'/'+patrocinadores);
    //}

}