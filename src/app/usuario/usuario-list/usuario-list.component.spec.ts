import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';
import {UsuarioListComponent} from './usuario-list.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {UsuarioService} from '../usuario.service';
import {Usuario} from '../usuario';

describe('UsuarioListComponent', () => {
    let component: UsuarioListComponent;
    let fixture: ComponentFixture<UsuarioListComponent>;
    const usuarios: Usuario[] = require('../../../assets/usuarios.json');

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, UsuarioService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsuarioListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should have a list of usuarios', () => {
        component.usuarios = usuarios;
        expect(component.usuarios.length).toEqual(usuarios.length);
    });

    it('a usuario should be a usuario (first and last)', () => {
        component.usuarios = usuarios;
       
        expect(component.usuarios[0].correoElectronico).toEqual(usuarios[0].correoElectronico);
        expect(component.usuarios[usuarios.length - 1].correoElectronico).toEqual(usuarios[usuarios.length - 1].correoElectronico);
    });
});