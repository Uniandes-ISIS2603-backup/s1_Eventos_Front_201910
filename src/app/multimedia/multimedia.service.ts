import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Multimedia } from './multimedia';
import { MultimediaDetail } from './multimedia-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const multimedias = '/multimedias';


/**
* The service provider for everything related to multimedias
*/
@Injectable()
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

    /**
    * Returns the Observable object containing the multimedia retrieved from the API
    * @returns The multimedia
    */
    getMultimediaDetail(multimediaId): Observable<MultimediaDetail> {
        return this.http.get<MultimediaDetail>(API_URL + multimedias + '/' + multimediaId);
    }
    
    /**
    * Creates an multimedia
    * @param multimedia The multimedia which will be created
    * @returns The confirmation of the multimedia's creation
    */
    createMultimedia(multimedia): Observable<Multimedia> {
        return this.http.post<Multimedia>(API_URL + multimedias, multimedia);
    }
    
    /**
    * Updates an multimedia
    * @param multimedia The multimedia which will be update
    * @returns The confirmation of the multimedia's update
    */
    updateMultimedia(multimedia): Observable<MultimediaDetail> {
        return this.http.put<MultimediaDetail>(API_URL + multimedias + '/' + multimedia.id, multimedia);
    }
}