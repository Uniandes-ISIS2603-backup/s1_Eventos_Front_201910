import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {EventoService} from './evento.service';
import { EventoListComponent } from './evento-list/evento-list.component';
import { EventoCreateComponent } from './evento-create/evento-create.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { EventoEditComponent } from './evento-edit/evento-edit.component';

import {AppRoutingModule} from '../app-routing/app-routing.module';

import {CalificacionListComponent} from '../calificacion/calificacion-list/calificacion-list.component';
import { CalificacionEditComponent } from '../calificacion/calificacion-edit/calificacion-edit.component';
import { CalificacionCreateComponent } from '../calificacion/calificacion-create/calificacion-create.component';
import { CalificacionDetailComponent } from '../calificacion/calificacion-detail/calificacion-detail.component';


import {EntradaListComponent} from '../entrada/entrada-list/entrada-list.component';
import { EntradaEditComponent } from '../entrada/entrada-edit/entrada-edit.component';
import { EntradaCreateComponent } from '../entrada/entrada-create/entrada-create.component';
import { EntradaDetailComponent } from '../entrada/entrada-detail/entrada-detail.component';


import {PatrocinadorListComponent} from '../patrocinador/patrocinador-list/patrocinador-list.component';
import { PatrocinadorEditComponent } from '../patrocinador/patrocinador-edit/patrocinador-edit.component';
import { PatrocinadorCreateComponent } from '../patrocinador/patrocinador-create/patrocinador-create.component';
import { PatrocinadorDetailComponent } from '../patrocinador/patrocinador-detail/patrocinador-detail.component';


import {MultimediaListComponent} from '../multimedia/multimedia-list/multimedia-list.component';
import { MultimediaEditComponent } from '../multimedia/multimedia-edit/multimedia-edit.component';
import { MultimediaCreateComponent } from '../multimedia/multimedia-create/multimedia-create.component';
import { MultimediaDetailComponent } from '../multimedia/multimedia-detail/multimedia-detail.component';


import {AgendaListComponent} from '../agenda/agenda-list/agenda-list.component';
import { AgendaEditComponent } from '../agenda/agenda-edit/agenda-edit.component';
import { AgendaCreateComponent } from '../agenda/agenda-create/agenda-create.component';
import { AgendaDetailComponent } from '../agenda/agenda-detail/agenda-detail.component';



    import {DatePipe} from '@angular/common';

    @NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule ,
  ],
  declarations: [
  EventoListComponent, EventoCreateComponent, EventoDetailComponent, EventoEditComponent,
  CalificacionListComponent,CalificacionEditComponent,CalificacionCreateComponent,CalificacionDetailComponent,
  EntradaListComponent,EntradaEditComponent,EntradaCreateComponent,EntradaDetailComponent,
  AgendaListComponent,AgendaEditComponent,AgendaCreateComponent,AgendaDetailComponent,
  PatrocinadorListComponent,PatrocinadorEditComponent,PatrocinadorCreateComponent,PatrocinadorDetailComponent,
  MultimediaListComponent,MultimediaEditComponent,MultimediaCreateComponent,MultimediaDetailComponent



  ],
  providers:[EventoService],
  bootstrap:[EventoListComponent, EventoCreateComponent, EventoDetailComponent,EventoEditComponent],
  exports:[
  EventoListComponent, EventoCreateComponent, EventoDetailComponent,EventoEditComponent,
  CalificacionListComponent,
  EntradaListComponent,
  AgendaListComponent,
  MultimediaListComponent,
  PatrocinadorListComponent,
]

})
export class EventoModule { }
