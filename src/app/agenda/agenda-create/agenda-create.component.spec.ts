import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import { AgendaCreateComponent } from './agenda-create.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {AgendaService} from '../agenda.service';
import {Agenda} from '../agenda';

describe('AgendaCreateComponent', () => {
 let component: AgendaCreateComponent;
    let fixture: ComponentFixture<AgendaCreateComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: ''
                }, 
                AgendaService,
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
        fixture = TestBed.createComponent(AgendaCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
});