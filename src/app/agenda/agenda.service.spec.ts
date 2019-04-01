import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Agenda} from './agenda';
import {AgendaService} from './agenda.service';
import {AppModule} from '../app.module';


describe('Service: AgendaService', () => {
    let injector: TestBed;
    let service: AgendaService;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, AgendaService]
        });
        injector = getTestBed();
        service = injector.get(AgendaService);
    });
    
    it('#getAgendas should return value from observable',
    (done: DoneFn) => {
    service.getAgendas().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
        });
    });
    
});