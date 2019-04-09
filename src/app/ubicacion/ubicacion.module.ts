import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbicacionListComponent } from './ubicacion/ubicacion-list/ubicacion-list.component';
import { UbicacionCreateComponent } from './ubicacion/ubicacion-create/ubicacion-create.component';
import { UbicacionDetailComponent } from './ubicacion/ubicacion-detail/ubicacion-detail.component';
import { UbicacionService} from './ubicacion.service';

import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
      CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [UbicacionListComponent, UbicacionCreateComponent, UbicacionDetailComponent],
providers : [UbicacionService],
bootstrap:[ UbicacionListComponent,  UbicacionCreateComponent,  UbicacionDetailComponent],
  exports:[ UbicacionListComponent,  UbicacionCreateComponent,  UbicacionDetailComponent]

})
export class UbicacionModule { }
