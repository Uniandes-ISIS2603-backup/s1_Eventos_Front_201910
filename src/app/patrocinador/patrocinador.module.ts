import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';

import { PatrocinadorListComponent } from '../patrocinador/patrocinador-list/patrocinador-list.component';
import { PatrocinadorService} from './patrocinador.service';
import { PatrocinadorCreateComponent } from './patrocinador-create/patrocinador-create.component';
import { PatrocinadorDetailComponent } from './patrocinador-detail/patrocinador-detail.component';
import { PatrocinadorEditComponent } from './patrocinador-edit/patrocinador-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [PatrocinadorListComponent, PatrocinadorCreateComponent, PatrocinadorDetailComponent, PatrocinadorEditComponent],
  providers: [
      PatrocinadorService
  ],
  exports: [
    PatrocinadorListComponent, PatrocinadorEditComponent
  ]
})
export class PatrocinadorModule { }
