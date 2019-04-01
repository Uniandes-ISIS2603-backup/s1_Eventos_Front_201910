import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Multimedia } from './multimedia';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const multimedias = '/multimedias';


@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
/**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of multimedias retrieved from the API
    * @returns The list of multimedias in real time
    */
    getMultimedias(): Observable<Multimedia[]> {
        return this.http.get<Multimedia[]>(API_URL + multimedias);
    }
}
