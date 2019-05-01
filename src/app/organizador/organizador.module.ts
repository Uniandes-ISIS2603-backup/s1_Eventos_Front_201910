import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';

import { OrganizadorListComponent } from '../organizador/organizador-list/organizador-list.component';
import {OrganizadorService} from './organizador.service';

import { EventoModule } from '../evento/evento.module';
import { OrganizadorCreateComponent } from './organizador-create/organizador-create.component';
import { OrganizadorEditComponent } from './organizador-edit/organizador-edit.component';
import { OrganizadorDetailComponent } from './organizador-detail/organizador-detail.component';



@NgModule({
  imports: [
  
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        EventoModule
        
  ],
  declarations: [OrganizadorListComponent, OrganizadorCreateComponent, OrganizadorEditComponent, OrganizadorDetailComponent],
  providers: [ OrganizadorService ],
  exports: [
   
    OrganizadorListComponent, OrganizadorEditComponent
    
  ]
})
export class OrganizadorModule { }
