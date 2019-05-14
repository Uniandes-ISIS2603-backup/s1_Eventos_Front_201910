import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {UsuarioListComponent} from './usuario-list/usuario-list.component';
import {UsuarioService} from './usuario.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {UsuarioDetailComponent} from './usuario-detail/usuario-detail.component';
import {UsuarioCreateComponent} from './usuario-create/usuario-create.component';
import {UsuarioEditComponent} from './usuario-edit/usuario-edit.component';
import { MedioDePagoListComponent } from '../medioDePago/medioDePago-list/medioDePago-list.component';
import { MedioDePagoCreateComponent } from '../medioDePago/medioDePago-create/medioDePago-create.component';
import { MedioDePagoEditComponent } from '../medioDePago/medioDePago-edit/medioDePago-edit.component';
import { MedioDePagoDetailComponent } from '../medioDePago/medioDePago-detail/medioDePago-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [UsuarioListComponent, UsuarioDetailComponent, UsuarioCreateComponent, UsuarioEditComponent,
    MedioDePagoListComponent,MedioDePagoCreateComponent,MedioDePagoEditComponent,MedioDePagoDetailComponent],
    providers: [UsuarioService],
    exports: [UsuarioListComponent,MedioDePagoListComponent]
})
export class UsuarioModule {}