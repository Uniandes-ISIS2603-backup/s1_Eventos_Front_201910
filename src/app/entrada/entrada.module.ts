import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntradaListComponent } from './entrada-list/entrada-list.component';
import { EntradaDetailComponent } from '../entrada/entrada-detail/entrada-detail.component';
import {EntradaService} from './entrada.service';
import { EntradaCreateComponent } from '../entrada/entrada-create/entrada-create.component';
import { FormsModule } from '@angular/forms';
import { EntradaEditComponent } from './entrada-edit/entrada-edit.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports:[
        CommonModule,FormsModule,AppRoutingModule,HttpClientModule,
        NgbModule
    ],
    declarations: [EntradaListComponent, 
                    EntradaDetailComponent,
                   EntradaCreateComponent,
                   EntradaEditComponent
                ],
    providers: [EntradaService],
    exports:[EntradaListComponent]
})
export class EntradaModule{}