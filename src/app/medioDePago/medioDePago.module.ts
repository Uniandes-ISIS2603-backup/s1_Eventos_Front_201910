import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedioDePagoListComponent } from './medioDePago-list/medioDePago-list.component';
import { MedioDePagoDetailComponent } from '../medioDePago/medioDePago-detail/medioDePago-detail.component';
import { MedioDePagoService} from './medioDePago.service';
import { MedioDePagoCreateComponent } from '../medioDePago/medioDePago-create/medioDePago-create.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports:[
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule
    ],
    declarations: [MedioDePagoListComponent, MedioDePagoDetailComponent, MedioDePagoCreateComponent],
    providers: [MedioDePagoService],
    exports:[MedioDePagoListComponent]
})
export class MedioDePagoModule{}