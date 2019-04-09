import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {EventoService} from './evento.service';
import { EventoListComponent } from './evento-list/evento-list.component';
import { EventoCreateComponent } from './evento-create/evento-create.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { EventoEditComponent } from './evento-edit/evento-edit.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [EventoListComponent, EventoCreateComponent, EventoDetailComponent, EventoEditComponent],
  providers:[EventoService],
  bootstrap:[EventoListComponent, EventoCreateComponent, EventoDetailComponent,EventoEditComponent],
  exports:[EventoListComponent, EventoCreateComponent, EventoDetailComponent,EventoEditComponent]

})
export class EventoModule { }
