import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaService } from './factura.service';
import { FacturaListComponent } from './factura-list/factura-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FacturaDetailComponent } from './factura-detail/factura-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        FacturaListComponent, FacturaDetailComponent
    ],
    providers: [FacturaService],
    exports: [FacturaListComponent]
})
export class FacturaModule { }
