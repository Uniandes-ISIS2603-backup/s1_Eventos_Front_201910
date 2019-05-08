import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedioDePagoListComponent } from './medioDePago-list/medioDePago-list.component';
import { MedioDePagoDetailComponent } from '../medioDePago/medioDePago-detail/medioDePago-detail.component';
import { MedioDePagoService} from './medioDePago.service';
import { MedioDePagoCreateComponent } from '../medioDePago/medioDePago-create/medioDePago-create.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MedioDePagoEditComponent } from  './medioDePago-edit/medioDePago-edit.component';

/**
 * Modulo de medio de pago
 * Se realizan los imports necesarios para el funcionamient intercomponente
 * Se realiza las declaraciones de los componentes que habran (list,edit, detail y create)
 * exporta todo en un componente "principal", el list
 * Providers es de donde obtendra la informacion
 */
@NgModule({
    imports:[
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule
    ],
    declarations: [MedioDePagoListComponent,MedioDePagoDetailComponent,MedioDePagoCreateComponent,MedioDePagoEditComponent],
    providers: [MedioDePagoService],
    exports:[]
})
export class MedioDePagoModule{}