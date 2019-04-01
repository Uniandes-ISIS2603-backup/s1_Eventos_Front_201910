import {async, ComponentFixture, TestBed } from '@angular/core/testing';

import {MedioDePagoListComponent} from './medioDePago-list.component';

describe('MedioDePagoListComponent', ()=>{
    let component: MedioDePagoListComponent;
    let fixture: ComponentFixture<MedioDePagoListComponent>;

    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations: [MedioDePagoListComponent]
        }).compileComponents();
    }));

    beforeEach(()=>{
        fixture = TestBed.createComponent(MedioDePagoListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', ()=>{
        expect(component).toBeTruthy();
    });

});