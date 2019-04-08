import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedioDePagoListComponent } from './medioDePago-list/medioDePago-list.component';
import { MedioDePagoDetailComponent } from '../medioDePago/medioDePago-detail/medioDePago-detail.component';
import { MedioDePagoService} from './medioDePago.service';
import { MedioDePagoCreateComponent } from '../medioDePago/medioDePago-create/medioDePago-create.component';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [MedioDePagoListComponent, MedioDePagoDetailComponent, MedioDePagoCreateComponent],
    providers: [MedioDePagoService],
    exports:[MedioDePagoListComponent, MedioDePagoDetailComponent, MedioDePagoCreateComponent]
})
export class MedioDePagoModule{}