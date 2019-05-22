import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitadoService } from './invitado.service';
import { InvitadoListComponent } from './invitado-list/invitado-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InvitadoCreateComponent } from './invitado-create/invitado-create.component';
import { InvitadoEditComponent } from './invitado-edit/invitado-edit.component';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventoService } from '../evento/evento.service';
import { InvitadoDetailComponent } from './invitado-detail/invitado-detail.component';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule
    ],
    declarations: [InvitadoListComponent,InvitadoCreateComponent,InvitadoEditComponent,InvitadoDetailComponent
        
 ],
    providers: [InvitadoService],
    exports: []
})
export class InvitadoModule { }
