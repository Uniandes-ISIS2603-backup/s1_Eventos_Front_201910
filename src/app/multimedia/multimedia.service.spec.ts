import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Multimedia} from './Multimedia';
import {MultimediaService} from './Multimedia.service';
import {AppModule} from '../app.module';


describe('Service: MultimediaService', () => {
    let injector: TestBed;
    let service: MultimediaService;
	const multimedias: Multimedia[] = require('../../assets/multimedias.json');
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, MultimediaService]
        });
        injector = getTestBed();
        service = injector.get(MultimediaService);
    });
    
    it('#getMultimedias should return value from observable',
    (done: DoneFn) => {
    service.getMultimedias().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
        });
    });
	
	it('#createMultimedia should return value from observable',
    (done: DoneFn) => {
    let multimedia:Multimedia = {id:100,nombre:"prueba",url:"prueba.jpg",tipo:"Imagen",memoria:false};
    service.createMultimedia(multimedia).subscribe(value => {
        expect(value.nombre).toEqual(multimedia.nombre);
        done();
        });
    });
	
	it('#getMultimediaDetail should return value from observable',
    (done: DoneFn) => {
    service.getMultimediaDetail(multimedias[0].id).subscribe(value => {
        expect(value.nombre).toEqual(multimedias[0].nombre);
        done();
        });
    });
	
	it('#updateMultimedia should return the multimedia updated',
    (done: DoneFn) => {
	let multimedia:Multimedia = {id:100,nombre:"prueba",url:"prueba.jpg",tipo:"Imagen",memoria:false};
    service.updateMultimedia(multimedia).subscribe(value => {
        expect(value.nombre).toEqual(multimedia.nombre);
        done();
        });
    });
    
});