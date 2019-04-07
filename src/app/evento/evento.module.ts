import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoListComponent } from './evento/evento-list/evento-list.component';
import { EventoCreateComponent } from './evento/evento-create/evento-create.component';
import { EventoDetailComponent } from './evento/evento-detail/evento-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventoListComponent, EventoCreateComponent, EventoDetailComponent]
})
export class EventoModule { }
