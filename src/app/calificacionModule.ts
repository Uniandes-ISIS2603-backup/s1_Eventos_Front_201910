import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificacionListComponent } from './calificacion/calificacion-list/calificacion-list.component';
import { FormsModule } from '@angular/forms';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

/**
 * Modulo de calificacion
 * Se realizan los imports necesarios para el funcionamient intercomponente
 * Se realiza las declaraciones de los componentes que habran (list,edit, detail y create)
 * exporta todo en un componente "principal", el list
 * Providers es de donde obtendra la informacion
 */
@NgModule({
    imports:[
        CommonModule, FormsModule,HttpClientModule,
        NgbModule
    ],
    declarations: [CalificacionListComponent,  
                   ],
    providers: [
    ],
    exports:[CalificacionListComponent
            ]
})
export class CalificacionModule{}