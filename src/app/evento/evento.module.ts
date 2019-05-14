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
import { EventoDetallesComponent } from './evento-detail/evento-detalles/evento-detalles.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {CalificacionListComponent} from '../calificacion/calificacion-list/calificacion-list.component';
import { CalificacionEditComponent } from '../calificacion/calificacion-edit/calificacion-edit.component';
import { CalificacionCreateComponent } from '../calificacion/calificacion-create/calificacion-create.component';
import { CalificacionDetailComponent } from '../calificacion/calificacion-detail/calificacion-detail.component';
    import {DatePipe} from '@angular/common';

    @NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule ,
  ],
  declarations: [EventoListComponent, EventoCreateComponent, EventoDetailComponent, EventoEditComponent, EventoDetallesComponent
  ,CalificacionListComponent,CalificacionEditComponent,CalificacionCreateComponent,CalificacionDetailComponent],
  providers:[EventoService],
  bootstrap:[EventoListComponent, EventoCreateComponent, EventoDetailComponent,EventoEditComponent],
  exports:[EventoListComponent, EventoCreateComponent, EventoDetailComponent,EventoEditComponent,CalificacionListComponent]

})
export class EventoModule { }
