import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Patrocinador } from './patrocinador';
import { PatrocinadorDetail } from './patrocinador-detail';


import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const patrocinadores = '/patrocinadores';

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
    * Returns the Observable object with the details of an patrocinador retrieved from the API
    * @returns The patrocinador details
    */
    getPatrocinadorDetail(patrocinadorId): Observable<PatrocinadorDetail> {
        return this.http.get<PatrocinadorDetail>(API_URL + patrocinadores + '/' + patrocinadorId);
    }
    
    /**
    * Creates an patrocinador
    * @param agenda The new patrocinador
    * @returns The confirmation that the patrocinador was created
    */
    createPatrocinador(patrocinador): Observable<Patrocinador> {
        return this.http.post<Patrocinador>(API_URL + patrocinadores, patrocinador);
    }
}
