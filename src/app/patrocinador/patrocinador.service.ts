import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Patrocinador } from './patrocinador';
import {PatrocinadorDetail} from './patrocinador-detail';


import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const patrocinadores = '/patrocinadores';
const eventos = '/eventos';

@Injectable()
export class PatrocinadorService {

  constructor(private http: HttpClient) { }
  
      /**
    * Returns the Observable object containing the list of patrocinadores retrieved from the API
    * @returns The list of patrocinadores in real time
    */
    getPatrocinadores(): Observable<Patrocinador[]> {
        return this.http.get<Patrocinador[]>(API_URL + patrocinadores);
    }
    
    /**
    * Creates a new patrocinador
    * @param patrocinador The new patrocinador
    * @returns The patrocinador with its new id if it was created, false if it wasn't
    */
    createPatrocinador(patrocinador): Observable<PatrocinadorDetail> {
        return this.http.post<PatrocinadorDetail>(API_URL + patrocinadores, patrocinador);
    }
    
    /**
    * Returns the Observable object with the details of an patrocinador retrieved from the API
    * @returns The patrocinador details
    */
    getPatrocinadorDetail(patrocinadorId): Observable<PatrocinadorDetail> {
        return this.http.get<PatrocinadorDetail>(API_URL + patrocinadores + '/' + patrocinadorId);
    }
    
    /**
    * Updates a new patrocinador
    * @param book patrocinador updated patrocinador
    * @returns The updated patrocinador
    */
    updatePatrocinador(patrocinador): Observable<PatrocinadorDetail> {
        return this.http.put<PatrocinadorDetail>(API_URL + patrocinadores + '/' + patrocinador.id, patrocinador);
    }
    
    getEventoPatrocinadores(eventoId):Observable<Patrocinador[]>{
        return this.http.get<Patrocinador[]>(API_URL+eventos+'/'+eventoId+'/'+'patrocinadores');
    }

}
