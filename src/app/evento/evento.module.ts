import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {NgxPermissionsModule} from 'ngx-permissions';



import {EventoService} from './evento.service';
import { EventoListComponent } from './evento-list/evento-list.component';
import { EventoCreateComponent } from './evento-create/evento-create.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { EventoEditComponent } from './evento-edit/evento-edit.component';


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

import {InvitadoListComponent} from '../invitado/invitado-list/invitado-list.component';
import { InvitadoEditComponent } from '../invitado/invitado-edit/invitado-edit.component';
import { InvitadoCreateComponent } from '../invitado/invitado-create/invitado-create.component';
import { InvitadoDetailComponent } from '../invitado/invitado-detail/invitado-detail.component';


import {UbicacionListComponent} from '../ubicacion/ubicacion-list/ubicacion-list.component';
import { UbicacionEditComponent } from '../ubicacion/ubicacion-edit/ubicacion-edit.component';
import { UbicacionCreateComponent } from '../ubicacion/ubicacion-create/ubicacion-create.component';
import { UbicacionDetailComponent } from '../ubicacion/ubicacion-detail/ubicacion-detail.component';



    import {DatePipe} from '@angular/common';

    @NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule ,
    NgbModule
  ],
  declarations: [
  EventoListComponent, EventoCreateComponent, EventoDetailComponent, EventoEditComponent,
  CalificacionListComponent,CalificacionEditComponent,CalificacionCreateComponent,CalificacionDetailComponent,
  EntradaListComponent,EntradaEditComponent,EntradaCreateComponent,EntradaDetailComponent,
  AgendaListComponent,AgendaEditComponent,AgendaCreateComponent,AgendaDetailComponent,
  PatrocinadorListComponent,PatrocinadorEditComponent,PatrocinadorCreateComponent,PatrocinadorDetailComponent,
  MultimediaListComponent,MultimediaEditComponent,MultimediaCreateComponent,MultimediaDetailComponent,
 InvitadoListComponent,InvitadoEditComponent,InvitadoCreateComponent,InvitadoDetailComponent,
  UbicacionListComponent,UbicacionEditComponent,UbicacionCreateComponent,UbicacionDetailComponent



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
  InvitadoListComponent,
        UbicacionListComponent
]

})
export class EventoModule { }
