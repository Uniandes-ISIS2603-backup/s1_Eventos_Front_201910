import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import {InvitadoEditComponent} from './invitado-edit.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {InvitadoService} from '../invitado.service';
import {Invitado} from '../invitado';
describe('InvitadoEditComponent', () => {
    let component: InvitadoEditComponent;
    let fixture: ComponentFixture<InvitadoEditComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: ''
                }, 
                InvitadoService,
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                           paramMap: convertToParamMap({id: 100})
                        }
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InvitadoEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
