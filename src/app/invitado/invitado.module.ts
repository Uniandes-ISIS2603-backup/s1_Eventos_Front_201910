import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitadoService } from './invitado.service';
import { InvitadoListComponent } from './invitado-list/invitado-list.component';
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
        InvitadoListComponent
    ],
    providers: [InvitadoService],
    exports: [InvitadoListComponent]
})
export class InvitadoModule { }
