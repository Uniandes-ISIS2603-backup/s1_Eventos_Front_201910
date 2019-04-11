import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntradaListComponent } from './entrada-list/entrada-list.component';
import { EntradaDetailComponent } from '../entrada/entrada-detail/entrada-detail.component';
import {EntradaService} from './entrada.service';
import { EntradaCreateComponent } from '../entrada/entrada-create/entrada-create.component';


@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [EntradaListComponent, EntradaDetailComponent, EntradaCreateComponent],
    providers: [EntradaService],
    exports:[EntradaListComponent, EntradaDetailComponent, EntradaCreateComponent]
})
export class EntradaModule{}