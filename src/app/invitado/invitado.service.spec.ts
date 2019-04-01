import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Invitado} from './invitado';
import {InvitadoService} from './invitado.service';
import {AppModule} from '../app.module';


describe('Service: invitadoService', () => {
    let injector: TestBed;
    let service: InvitadoService;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, InvitadoService]
        });
        injector = getTestBed();
        service = injector.get(InvitadoService);
    });
    
    it('#getinvitados should return value from observable',
    (done: DoneFn) => {
    service.getInvitados().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
        });
    });
    
});