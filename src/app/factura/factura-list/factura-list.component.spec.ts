import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';
import {FacturaListComponent} from './factura-list.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {FacturaService} from '../factura.service';
import {Factura} from '../factura';

describe('FacturaListComponent', () => {
    let component: FacturaListComponent;
    let fixture: ComponentFixture<FacturaListComponent>;
    const facturas: Factura[] = require('../../../assets/Facturas.json');

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, FacturaService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FacturaListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should have a list of Facturas', () => {
        component.facturas = facturas;
        expect(component.facturas.length).toEqual(facturas.length);
    });

    it('a Factura should be a Factura (first and last)', () => {
        component.facturas = facturas;
        //revisar todos los libros
        expect(component.facturas[0].name).toEqual(facturas[0].name);
        expect(component.facturas[facturas.length - 1].name).toEqual(facturas[facturas.length - 1].name);
    });
});
