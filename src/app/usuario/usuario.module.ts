import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import {UsuarioService} from './usuario.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';

import { EventoModule } from '../evento/evento.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    EventoModule
  ],
  declarations: [UsuarioListComponent, UsuarioCreateComponent, UsuarioDetailComponent],
  exports: [UsuarioListComponent],
  providers: [UsuarioService]
})
export class UsuarioModule { }
