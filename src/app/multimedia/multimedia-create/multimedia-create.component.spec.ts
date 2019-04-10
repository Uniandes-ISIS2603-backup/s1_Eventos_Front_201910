import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import { MultimediaCreateComponent } from './multimedia-create.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {MultimediaService} from '../multimedia.service';
import {Multimedia} from '../multimedia';


describe('MultimediaCreateComponent', () => {
	let component: MultimediaCreateComponent;
	let fixture: ComponentFixture<MultimediaCreateComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: ''
                }, 
                MultimediaService,
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
        fixture = TestBed.createComponent(MultimediaCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});