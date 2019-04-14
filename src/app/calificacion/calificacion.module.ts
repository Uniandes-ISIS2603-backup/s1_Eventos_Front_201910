import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificacionListComponent } from './calificacion-list/calificacion-list.component';
import { CalificacionDetailComponent } from '../calificacion/calificacion-detail/calificacion-detail.component';
import { CalificacionService } from './calificacion.service';
import { CalificacionCreateComponent } from '../calificacion/calificacion-create/calificacion-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports:[
        CommonModule, FormsModule
    ],
    declarations: [CalificacionListComponent, 
                    CalificacionDetailComponent,
                    CalificacionCreateComponent],
    providers: [
        CalificacionService
    ],
    exports:[CalificacionListComponent,
            CalificacionDetailComponent,
            CalificacionCreateComponent]
})
export class CalificacionModule{}
