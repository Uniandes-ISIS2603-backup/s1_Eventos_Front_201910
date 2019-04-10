import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Entrada } from './entrada';
import { EntradaDetail } from './entrada-detail';


import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const entradas = '/entradas';

@Injectable()
export class EntradaService {

    constructor(private http: HttpClient) { }

    getEntradas(): Observable<Entrada[]> {
        return this.http.get<Entrada[]>(API_URL + entradas);
    }

    getEntradaDetail(entradaId): Observable<EntradaDetail> {
        return this.http.get<EntradaDetail>(API_URL + entradas + '/' + entradaId);
    }

    createEntrada(entrada): Observable<Entrada> {
        return this.http.post<Entrada>(API_URL + entradas, entrada);
    }

}