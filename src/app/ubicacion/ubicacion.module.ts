import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbicacionService} from './ubicacion.service';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { UbicacionListComponent } from './ubicacion-list/ubicacion-list.component';
import { UbicacionDetailComponent } from './ubicacion-detail/ubicacion-detail.component';
import { UbicacionCreateComponent } from './ubicacion-create/ubicacion-create.component';
import { UbicacionEditComponent } from './ubicacion-edit/ubicacion-edit.component';
import {EventoService} from '../evento/evento.service';

@NgModule({
  imports: [
      CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [],
providers : [UbicacionService,EventoService],
bootstrap:[ ],
  exports:[ ]

})
export class UbicacionModule { }
