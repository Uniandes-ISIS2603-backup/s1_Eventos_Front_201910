import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Invitado } from './invitado';


import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const Invitados = '/invitados';


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
        return this.http.get<Invitado[]>(API_URL + Invitados);
    }
    
}
