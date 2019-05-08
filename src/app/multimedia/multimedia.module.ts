import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {MultimediaService} from './multimedia.service';
import { MultimediaListComponent } from './multimedia-list/multimedia-list.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { MultimediaDetailComponent } from './multimedia-detail/multimedia-detail.component';
import { MultimediaCreateComponent } from './multimedia-create/multimedia-create.component';
import { MultimediaEditComponent } from './multimedia-edit/multimedia-edit.component';
import{EventoService} from '../evento/evento.service';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [],
  providers: [MultimediaService,EventoService],
  bootstrap: [MultimediaListComponent]
})
export class MultimediaModule { }
