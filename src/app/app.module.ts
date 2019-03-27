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
import { FacturasComponent } from './facturas/facturas.component';
import { AgendasComponent } from './agendas/agendas.component';
import { InvitadosComponent } from './invitados/invitados.component';
import { FacturasListComponent } from './facturas/facturas-list/facturas-list.component';
import { FacturasDetailComponent } from './facturas/facturas-detail/facturas-detail.component';
import { AgendasListComponent } from './agendas/agendas-list/agendas-list.component';
import { InvitadosListComponent } from './invitados/invitados-list/invitados-list.component';






@NgModule({
    declarations: [
        AppComponent,
        FacturasComponent,
        AgendasComponent,
        InvitadosComponent,
        FacturasListComponent,
        FacturasDetailComponent,
        AgendasListComponent,
        InvitadosListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule
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
