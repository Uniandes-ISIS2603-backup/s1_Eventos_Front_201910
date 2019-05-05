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
  declarations: [EventoListComponent, EventoCreateComponent, EventoDetailComponent, EventoEditComponent],
  providers:[EventoService,DatePipe],
  bootstrap:[EventoListComponent, EventoCreateComponent, EventoDetailComponent,EventoEditComponent],
  exports:[EventoListComponent, EventoCreateComponent, EventoDetailComponent,EventoEditComponent]

})
export class EventoModule { }
