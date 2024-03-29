/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';
import {OrganizadorModule } from './organizador/organizador.module';
import {PatrocinadorModule } from './patrocinador/patrocinador.module';

import {EventoModule } from './evento/evento.module';
import {UbicacionModule } from './ubicacion/ubicacion.module';

import { FacturaModule } from './factura/factura.module';
import { AgendaModule } from './agenda/agenda.module';
import { InvitadoModule } from './invitado/invitado.module';
import {EntradaModule} from './entrada/entrada.module';
import {CalificacionModule} from './calificacion/calificacion.module';
import {MedioDePagoModule} from './medioDePago/medioDePago.module';
import {UsuarioModule} from './usuario/usuario.module';
import {MultimediaModule} from './multimedia/multimedia.module';






@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        FacturaModule,
        AgendaModule,
        InvitadoModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,
        OrganizadorModule,
        PatrocinadorModule,
        UbicacionModule,
        EventoModule,
        EntradaModule,
        CalificacionModule,
        MedioDePagoModule,
        UsuarioModule,
        MultimediaModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}



