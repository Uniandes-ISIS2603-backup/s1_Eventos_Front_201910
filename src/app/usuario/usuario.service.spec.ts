import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Usuario} from './Usuario';
import {UsuarioService} from './Usuario.service';
import {AppModule} from '../app.module';


describe('Service: UsuarioService', () => {
    let injector: TestBed;
    let service: UsuarioService;
	const usuarios: Usuario[] = require('../../assets/usuarios.json');
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, UsuarioService]
        });
        injector = getTestBed();
        service = injector.get(UsuarioService);
    });
    
    it('#getUsuarios should return value from observable',
    (done: DoneFn) => {
    service.getUsuarios().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
        });
    });
	
	it('#createUsuario should return value from observable',
    (done: DoneFn) => {
    let usuario:Usuario = {id:100,correoElectronico:"prueba@prueba.prueba",contrasenia:"Prueba1234#",longitud:90,latitud:90,unialpino:false};
    service.createUsuario(usuario).subscribe(value => {
        expect(value.correoElectronico).toEqual(usuario.correoElectronico);
        done();
        });
    });
	
	it('#getUsuarioDetail should return value from observable',
    (done: DoneFn) => {
    service.getUsuarioDetail(usuarios[0].id).subscribe(value => {
        expect(value.correoElectronico).toEqual(usuarios[0].correoElectronico);
        done();
        });
    });
	
	it('#updateUsuario should return the usuario updated',
    (done: DoneFn) => {
	let usuario:Usuario = {id:100,correoElectronico:"prueba@prueba.prueba",contrasenia:"Prueba1234#",longitud:90,latitud:90,unialpino:false};
    service.updateUsuario(usuario).subscribe(value => {
        expect(value.correoElectronico).toEqual(usuario.correoElectronico);
        done();
        });
    });
    
});