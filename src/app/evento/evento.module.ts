import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoListComponent } from './evento-list/evento-list.component';
import { EventoCreateComponent } from './evento-create/evento-create.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventoListComponent, EventoCreateComponent, EventoDetailComponent],
  exports: [EventoListComponent]
})
export class EventoModule { }
