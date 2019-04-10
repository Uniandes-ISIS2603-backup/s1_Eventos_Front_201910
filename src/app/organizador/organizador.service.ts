import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Organizador } from './organizador';
import { OrganizadorDetail } from './organizador-detail';


import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const organizadores = '/organizadores';

@Injectable()
export class OrganizadorService {

  constructor(private http: HttpClient) { }
  
      /**
    * Returns the Observable object containing the list of organizadores retrieved from the API
    * @returns The list of organizadores in real time
    */
    getOrganizadores(): Observable<Organizador[]> {
        return this.http.get<Organizador[]>(API_URL + organizadores);
    }
    
    /**
    * Returns the Observable object with the details of an organizador retrieved from the API
    * @returns The organizador details
    */
    getOrganizadorDetail(organizadorId): Observable<OrganizadorDetail> {
        return this.http.get<OrganizadorDetail>(API_URL + organizadores + '/' + organizadorId);
    }
    
    /**
    * Creates an organizador
    * @param invitado The new organizador
    * @returns The confirmation that the organizador was created
    */
    createOrganizador(organizador): Observable<Organizador> {
        return this.http.post<Organizador>(API_URL + organizadores, organizador);
    }
    
    /**
    * Updates an organizador
    * @param patrocinador The organizador which will be update
    * @returns The confirmation of the organizador update
    */
    updateOrganizador(organizador): Observable<OrganizadorDetail> {
        return this.http.put<OrganizadorDetail>(API_URL + organizadores + '/' + organizador.id, organizadores);
    }
}
