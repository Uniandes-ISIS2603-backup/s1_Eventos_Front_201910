import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Invitado } from './invitado';


import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const invitados = '/invitados';


/**
* The service provider for everything related to invitados
*/
@Injectable()
export class InvitadoService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
    /**
    * Returns the Observable object containing the list of invitados retrieved from the API
    * @returns The list of invitados in real time
    */
    getInvitados(): Observable<Invitado[]> {
        return this.http.get<Invitado[]>(API_URL + invitados);
    }
    /**
    * Returns the Observable object containing the invitado retrieved from the API
    * @returns The invitado
    */
    getInvitado(invitadoId): Observable<Invitado> {
        return this.http.get<Invitado>(API_URL + invitados + '/' + invitadoId);
    }
    /**
    * Updates an Invitado
    * @param invitado The Invitado which will be update
    * @returns The confirmation of the Invitado's update
    */
    updateInvitado(invitado):Observable<Invitado>{
        return this.http.put<Invitado>(API_URL + invitados + '/' + invitado.id,invitado)
    }
    /**
    * Creates an Invitado
    * @param invitado The Invitado which will be created
    * @returns The confirmation of the Invitado's creation
    */
    createInvitado(invitado): Observable<Invitado> {
        return this.http.post<Invitado>(API_URL + invitados, invitado);
    }
}
