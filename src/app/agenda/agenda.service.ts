import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Agenda } from './agenda';
import {AgendaDetail} from './agenda-detail'


import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const agendas = '/agendas';


/**
* The service provider for everything related to Agendas
*/
@Injectable()
export class AgendaService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
    /**
    * Returns the Observable object containing the list of Agendas retrieved from the API
    * @returns The list of agendas in real time
    */
    getAgendas(): Observable<Agenda[]> {
        return this.http.get<Agenda[]>(API_URL + agendas);
    }
    
    /**
    * Returns the Observable object with the details of an agenda retrieved from the API
    * @returns The agenda details
    */
   getAgendaDetail(AgendaId): Observable<AgendaDetail> {
        return this.http.get<AgendaDetail>(API_URL + agendas + '/' + AgendaId);
    }
    /**
    * Creates an agenda
    * @param agenda The new agenda
    * @returns The confirmation that the agenda was created
    */
   createAgenda(agenda): Observable<Agenda> {
        return this.http.post<Agenda>(API_URL + agendas, agenda);
    }
    /**
    * Updates an agenda
    * @param agenda The agenda's information updated
    * @returns The confirmation that the agenda was updated
    */
   updateAgenda(agenda): Observable<AgendaDetail> {
    return this.http.put<AgendaDetail>(API_URL + agendas + '/' + agenda.id, agenda);
}
}
