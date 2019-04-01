import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';
import {AgendaListComponent} from './agenda-list.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {AgendaService} from '../agenda.service';
import {Agenda} from '../agenda';

describe('AgendaListComponent', () => {
    let component: AgendaListComponent;
    let fixture: ComponentFixture<AgendaListComponent>;
    const Agendas: Agenda[] = require('../../../assets/Agendas.json');

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, AgendaService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AgendaListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should have a list of Agendas', () => {
        component.Agendas = Agendas;
        expect(component.Agendas.length).toEqual(Agendas.length);
    });

    it('a Agenda should be a Agenda (first and last)', () => {
        component.Agendas = Agendas;
        //revisar todos los libros
        expect(component.Agendas[0].name).toEqual(Agendas[0].name);
        expect(component.Agendas[Agendas.length - 1].name).toEqual(Agendas[Agendas.length - 1].name);
    });
});
