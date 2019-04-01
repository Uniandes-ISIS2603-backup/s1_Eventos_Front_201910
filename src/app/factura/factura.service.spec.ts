import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Factura} from './factura';
import {FacturaService} from './factura.service';
import {AppModule} from '../app.module';


describe('Service: facturaService', () => {
    let injector: TestBed;
    let service: FacturaService;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, FacturaService]
        });
        injector = getTestBed();
        service = injector.get(FacturaService);
    });
    
    it('#getfacturas should return value from observable',
    (done: DoneFn) => {
    service.getFacturas().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
        });
    });
    
});