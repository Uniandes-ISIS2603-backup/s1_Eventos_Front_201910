import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';
import {InvitadoListComponent} from './invitado-list.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {InvitadoService} from '../invitado.service';
import {Invitado} from '../invitado';

describe('InvitadoListComponent', () => {
    let component: InvitadoListComponent;
    let fixture: ComponentFixture<InvitadoListComponent>;
    const Invitados: Invitado[] = require('../../../assets/Invitados.json');

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, InvitadoService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InvitadoListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should have a list of Invitados', () => {
        component.Invitados = Invitados;
        expect(component.Invitados.length).toEqual(Invitados.length);
    });

    it('a Invitado should be a Invitado (first and last)', () => {
        component.Invitados = Invitados;
        //revisar todos los libros
        expect(component.Invitados[0].name).toEqual(Invitados[0].name);
        expect(component.Invitados[Invitados.length - 1].name).toEqual(Invitados[Invitados.length - 1].name);
    });
});
