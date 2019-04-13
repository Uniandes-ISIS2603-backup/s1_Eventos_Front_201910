import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { MedioDePago } from './medioDePago';
import { MedioDePagoDetail } from './medioDePago-detail';


import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const mediosDePago = '/mediosDePago';

@Injectable()
export class MedioDePagoService {

  constructor(private http: HttpClient) { }
  
    getMediosDePago(): Observable<MedioDePago[]> {
        return this.http.get<MedioDePago[]>(API_URL + mediosDePago);
    }
    
    getMedioDePagoDetail(medioDePagoId): Observable<MedioDePagoDetail> {
        return this.http.get<MedioDePagoDetail>(API_URL + mediosDePago + '/' + medioDePagoId);
    }
    
    createMedioDePago(medioDePago): Observable<MedioDePago> {
        return this.http.post<MedioDePago>(API_URL + mediosDePago, medioDePago);
    }

    updateMedioDePago(medioDePago): Observable<MedioDePagoDetail>{
        console.log("perroFlag")
        console.log(medioDePago)
        console.log(medioDePago.id)
         return this.http.put<MedioDePagoDetail>(API_URL+mediosDePago+'/'+medioDePago.id,medioDePago);
    }
}