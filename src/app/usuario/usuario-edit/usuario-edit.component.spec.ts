import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import { UsuarioEditComponent } from './usuario-edit.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {UsuarioService} from '../usuario.service';
import {Usuario} from '../usuario';


describe('UsuarioEditComponent', () => {
 let component: UsuarioEditComponent;
    let fixture: ComponentFixture<UsuarioEditComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: ''
                }, 
                UsuarioService,
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
        fixture = TestBed.createComponent(UsuarioEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
});