import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbicacionListComponent } from './ubicacion/ubicacion-list/ubicacion-list.component';
import { UbicacionCreateComponent } from './ubicacion/ubicacion-create/ubicacion-create.component';
import { UbicacionDetailComponent } from './ubicacion/ubicacion-detail/ubicacion-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UbicacionListComponent, UbicacionCreateComponent, UbicacionDetailComponent]
})
export class UbicacionModule { }
