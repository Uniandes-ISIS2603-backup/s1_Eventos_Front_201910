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
import { HereMapComponent } from './here-map/here-map.component';


@NgModule({
  imports: [
      CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [UbicacionListComponent, UbicacionDetailComponent, UbicacionCreateComponent, UbicacionEditComponent, HereMapComponent],
providers : [UbicacionService],
bootstrap:[UbicacionListComponent, UbicacionDetailComponent, UbicacionCreateComponent, UbicacionEditComponent ],
  exports:[UbicacionListComponent, UbicacionDetailComponent, UbicacionCreateComponent, UbicacionEditComponent ]

})
export class UbicacionModule { }
