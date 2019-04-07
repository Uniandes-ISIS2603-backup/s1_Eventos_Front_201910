import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Evento} from './evento';
import {EventoDetail} from './evento-detail';


import { environment} from '..environments/environment';
const API_URL = environment.apiURL;
const eventos = '/eventos';


@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) {}
  
   getEventos(): Observable<Evento[]>{
       return this.http.get<Evento[]>(API_URL + eventos);
   }
   
   getEventoDetail(evento_Id): Observable<EventoDetail>{
       return this.http.get<EventoDetail>(API_URL + eventos + '/'+ evento_Id);
   }
}
