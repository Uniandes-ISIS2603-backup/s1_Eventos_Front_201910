import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Multimedia } from './multimedia';
import { MultimediaDetail } from './multimedia-detail';

import { environment } from '../../environments/environment';

import { delay } from 'rxjs/operators';

const API_URL = environment.apiURL;
const calific = '/multimedias';
const eventos = '/eventos';

/**
 * Clase service, se encarga de obtener la informacion por medio de http de la base de datos (servidor desplegado de back)
 */
@Injectable()
export class MultimediaService{

    multimedias: Multimedia[];

    
    /**
     * Constructor de la clase service
     * @param http protocolo que se usara
     */
    constructor(private http: HttpClient) { }

    /**
   * Obtiene todos las multimedias que existen en la base de datos
   */
    getMultimedias(): Observable<Multimedia[]> {
        return this.http.get<Multimedia[]>(API_URL + calific);
    }

    addDeAcuerdo(multimedia): void{
        this.http.put<Multimedia[]>(API_URL + calific+'/'+multimedia.id,multimedia);
    }

    /**
     * Obtiene un multimedia dado un id
     * @param multimediaId id del medio de pago buscado
     */
    getMultimediaDetail(multimediaId): Observable<MultimediaDetail> {
        return this.http.get<MultimediaDetail>(API_URL + calific + '/' + multimediaId);
    }

    
    /**
     * Crea un multimedia en la base de datos
     * @param multimedia  - objetoDTO de califiacion
     */
    createMultimedia(multimedia): Observable<Multimedia> {
        return this.http.post<Multimedia>(API_URL + calific, multimedia);
    }

        createEventoMultimedia(eventoId,multimedia):Observable<Multimedia>{
        console.log('ASTAROTH!');
        console.log(API_URL+'/eventos/'+eventoId+'/multimedias');
        return this.http.post<Multimedia>(API_URL+'/eventos/'+eventoId+'/multimedias',multimedia);
            
    }

    deleteMultimedia(eventoId,multimediaId):Observable<MultimediaDetail>{
        console.log('ESTE ES EL ID A BORRAR '+multimediaId);
        return this.http.delete<MultimediaDetail>(API_URL+'/eventos/'+eventoId+'/multimedias/'+multimediaId);
    }

    /**
     * Actualiza un multimedia
     * @param multimedia multimedia que se va a actualizar
     */
    updateMultimedia(multimedia): Observable<MultimediaDetail>{
        return this.http.put<MultimediaDetail>(API_URL+calific+'/'+multimedia.id,multimedia);
    }

    getEventoMultimedias(eventoId):Observable<Multimedia[]>{
        return this.http.get<Multimedia[]>(API_URL+eventos+'/'+eventoId+'/'+'multimedias');
    }


    //updateEventoMultimedias(eventoId,multimedias: Multimedia[]): Observable<Multimedia[]>{
      //  return this.http.put<Multimedia[]>(API_URL+eventos+'/'+eventoId+'/'+multimedias);
    //}

}