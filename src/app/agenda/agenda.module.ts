import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaService } from './agenda.service';
import { AgendaListComponent } from './agenda-list/agenda-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        AgendaListComponent
    ],
    providers: [AgendaService],
    exports: [AgendaListComponent]
})
export class AgendaModule { }
