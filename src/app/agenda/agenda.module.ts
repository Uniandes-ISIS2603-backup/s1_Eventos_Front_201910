import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaService } from './agenda.service';
import { AgendaListComponent } from './agenda-list/agenda-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgendaDetailComponent } from './agenda-detail/agenda-detail.component';
import { AgendaCreateComponent } from './agenda-create/agenda-create.component';
import { AgendaEditComponent } from './agenda-edit/agenda-edit.component';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventoService } from '../evento/evento.service';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule
    ],
    declarations: [
       
    ],
    providers: [AgendaService, EventoService],
    exports: []
})
export class AgendaModule { }
