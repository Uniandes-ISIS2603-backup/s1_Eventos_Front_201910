import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntradaListComponent } from './entrada-list/entrada-list.component';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [EntradaListComponent],
    exports:[EntradaListComponent]
})
export class EntradaModule{}