import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { MedioDePago } from './medioDePago';
import { MedioDePagoDetail } from './medioDePago-detail';


import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const mediosDePago = '/mediosDePago';
const usuarios = '/usuarios';

/**
 * Clase service, se encarga de obtener la informacion por medio de http de la base de datos (servidor desplegado de back)
 */
@Injectable()
export class MedioDePagoService {

    /**
     * Constructor de la clase service
     * @param http protocolo que se usara
     */
  constructor(private http: HttpClient) { }
  
  /**
   * Obtiene todos los medios de pago que existen en la base de datos
   */
    getMediosDePago(): Observable<MedioDePago[]> {
        return this.http.get<MedioDePago[]>(API_URL + mediosDePago);
    }
    
    /**
     * Obtiene un medio de pago dado un id
     * @param medioDePagoId id del medio de pago buscado
     */
    getMedioDePagoDetail(medioDePagoId): Observable<MedioDePagoDetail> {
        return this.http.get<MedioDePagoDetail>(API_URL + mediosDePago + '/' + medioDePagoId);
    }
    
    /**
     * Crea un medioDePago en la base de datos
     * @param medioDePago  - objetoDTO de medio de pago
     */
    createMedioDePago(medioDePago): Observable<MedioDePago> {
        return this.http.post<MedioDePago>(API_URL + mediosDePago, medioDePago);
    }

    /**
     * Actualiza un medio de pago
     * @param medioDePago medio de pago que se va a actualizar
     */
    updateMedioDePago(medioDePago): Observable<MedioDePagoDetail>{
         return this.http.put<MedioDePagoDetail>(API_URL+mediosDePago+'/'+medioDePago.id,medioDePago);
    }

    getUsuarioMediosDePago(usuarioId):Observable<MedioDePago[]>{
        return this.http.get<MedioDePago[]>(API_URL+usuarios+'/'+usuarioId+'/'+'mediosDePago');
    }
}