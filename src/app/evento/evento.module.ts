import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { EventoListComponent } from './evento/evento-list/evento-list.component';
import { EventoCreateComponent } from './evento/evento-create/evento-create.component';
import { EventoDetailComponent } from './evento/evento-detail/evento-detail.component';
import {EventoService} from './evento.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [EventoListComponent, EventoCreateComponent, EventoDetailComponent],
  providers:[EventoService],
  bootstrap:[EventoListComponent]
})
export class EventoModule { }
