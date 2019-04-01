import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';

import { UsuarioCreateComponent } from './usuario-create.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {UsuarioService} from '../usuario.service';
import {Usuario} from '../usuario';

describe('UsuarioCreateComponent', () => {
	let component: UsuarioCreateComponent;
	let fixture: ComponentFixture<UsuarioCreateComponent>;
    
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
        fixture = TestBed.createComponent(UsuarioCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
