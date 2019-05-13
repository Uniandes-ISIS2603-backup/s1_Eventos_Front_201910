import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificacionListComponent } from './calificacion-list/calificacion-list.component';
import { CalificacionDetailComponent } from '../calificacion/calificacion-detail/calificacion-detail.component';
import { CalificacionService } from './calificacion.service';
import { CalificacionCreateComponent } from '../calificacion/calificacion-create/calificacion-create.component';
import { FormsModule } from '@angular/forms';
import { CalificacionEditComponent } from './calificacion-edit/calificacion-edit.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { EventoService } from '../evento/evento.service';

/**
 * Modulo de calificacion
 * Se realizan los imports necesarios para el funcionamient intercomponente
 * Se realiza las declaraciones de los componentes que habran (list,edit, detail y create)
 * exporta todo en un componente "principal", el list
 * Providers es de donde obtendra la informacion
 */
@NgModule({
    imports:[
        CommonModule, FormsModule,AppRoutingModule,HttpClientModule,
        NgbModule
    ],
    declarations: [ 
                   ],
    providers: [
        CalificacionService,EventoService
    ],
    exports:[
            ]
})
export class CalificacionModule{}