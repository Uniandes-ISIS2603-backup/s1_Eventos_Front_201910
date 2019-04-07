import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';



import {EventoService} from './evento.service';
import { EventoListComponent } from './evento-list/evento-list.component';
import { EventoCreateComponent } from './evento-create/evento-create.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [EventoListComponent, EventoCreateComponent, EventoDetailComponent],
  providers:[EventoService],
  bootstrap:[EventoListComponent],
  exports:[EventoListComponent]

})
export class EventoModule { }
