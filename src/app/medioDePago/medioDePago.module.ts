import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedioDePagoListComponent } from './medioDePago-list/medioDePago-list.component';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [MedioDePagoListComponent],
    exports:[MedioDePagoListComponent]
})
export class MedioDePagoModule{}