import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { MultimediaListComponent } from './multimedia-list.component';
import { Multimedia } from '../multimedia';
import { MultimediaService } from '../multimedia.service';

describe('MultimediaComponent', () => {
    let component: MultimediaListComponent;
    let fixture: ComponentFixture<MultimediaListComponent>;
    const multimedias: Multimedia[] = require('../../../assets/multimedias.json');

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{ provide: APP_BASE_HREF, useValue: '' }, MultimediaService]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MultimediaListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a list of multimedias', () => {
        component.multimedias = multimedias;
        expect(component.multimedias.length).toEqual(multimedias.length);
    });

    it('an author should be an multimedias (first and last)', () => {
        component.multimedias = multimedias;
        expect(component.multimedias[0].nombre).toEqual(multimedias[0].nombre);
        expect(component.multimedias[multimedias.length - 1].nombre).toEqual(multimedias[multimedias.length - 1].nombre);
    });

});