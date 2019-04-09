import { Injectable } from '@angular/core';

import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Ubicacion } from './ubicacion';
import {UbicacionDetailComponent}from './ubicacion/ubicacion-detail/ubicacion-detail.component';
import {UbicacionListComponent}from './ubicacion/ubicacion-list/ubicacion-list.component';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const ubicaciones = '/ubicaciones';


Injectable()
export class UbicacionService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
    /**
    * Returns the Observable object containing the list of  ubicacions retrieved from the API
    * @returns The list of  ubicacions in real time
    */
    getUbicaciones(): Observable< Ubicacion[]> {
        return this.http.get< Ubicacion[]>(API_URL + ubicaciones);
    }
    /**
    * Returns the Observable object containing the  ubicacion retrieved from the API
    * @returns The  ubicacion
    */
    getUbicacion( ubicacionId): Observable< Ubicacion> {
        return this.http.get< Ubicacion>(API_URL +  ubicaciones + '/' +  ubicacionId);
    }
    /**
    * Updates an  Ubicacion
    * @param  ubicacion The  Ubicacion which will be update
    * @returns The confirmation of the  Ubicacion's update
    */
    updateUbicacion( ubicacion):Observable< Ubicacion>{
        return this.http.put< Ubicacion>(API_URL +  ubicaciones + '/' +  ubicacion.id, ubicacion)
    }
    /**
    * Creates an  Ubicacion
    * @param  ubicacion The  Ubicacion which will be created
    * @returns The confirmation of the  Ubicacion's creation
    */
    createUbicacion( ubicacion): Observable< Ubicacion> {
        return this.http.post< Ubicacion>(API_URL +  ubicaciones,  ubicacion);
    }

     /**
    * Returns the Observable object with the details of an agenda retrieved from the API
    * @returns The agenda details
    */
   getUbicacionDetail( UbicacionId): Observable< UbicacionDetailComponent> {
    return this.http.get< UbicacionDetailComponent>(API_URL +  ubicaciones + '/' +  UbicacionId);
   }
}
