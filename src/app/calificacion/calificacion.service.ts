import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Calificacion } from './calificacion';
import { CalificacionDetail } from './calificacion-detail';

import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const calificaciones = '/calificaciones';

@Injectable()
export class CalificacionService{

    constructor(private http: HttpClient) { }

    getCalificaciones(): Observable<Calificacion[]> {
        return this.http.get<Calificacion[]>(API_URL + calificaciones);
    }

    addDeAcuerdo(calificacion): void{
        this.http.put<Calificacion[]>(API_URL + calificaciones+'/'+calificacion.id,calificacion);
    }

    getCalificacionDetail(calificacionId): Observable<CalificacionDetail> {
        return this.http.get<CalificacionDetail>(API_URL + calificaciones + '/' + calificacionId);
    }

    createCalificacion(calificacion): Observable<Calificacion> {
        return this.http.post<Calificacion>(API_URL + calificaciones, calificacion);
    }

}