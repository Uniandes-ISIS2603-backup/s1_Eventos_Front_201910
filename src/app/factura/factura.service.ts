import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Factura } from './factura';
import { FacturaDetail } from './factura-detail';


import { environment } from '../../environments/environment';
const API_URL = '../../assets';
const facturas = '/facturas.json';


/**
* The service provider for everything related to Facturas
*/
@Injectable()
export class FacturaService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
    /**
    * Returns the Observable object containing the list of Facturas retrieved from the API
    * @returns The list of Facturas in real time
    */
    getFacturas(): Observable<Factura[]> {
        return this.http.get<Factura[]>(API_URL +facturas);
    }
    
    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getFacturaDetail(FacturaId): Observable<FacturaDetail> {
        return this.http.get<FacturaDetail>(API_URL + facturas + '/' + FacturaId);
    }
    
}
