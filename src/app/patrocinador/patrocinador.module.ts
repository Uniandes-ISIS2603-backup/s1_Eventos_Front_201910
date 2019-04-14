import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';

import { PatrocinadorListComponent } from '../patrocinador/patrocinador-list/patrocinador-list.component';
import { PatrocinadorDetailComponent } from '../patrocinador/patrocinador-detail/patrocinador-detail.component';
import { PatrocinadorService} from './patrocinador.service';
import { PatrocinadorCreateComponent } from '../patrocinador/patrocinador-create/patrocinador-create.component';
import { PatrocinadorEditComponent } from '../patrocinador/patrocinador-edit/patrocinador-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [PatrocinadorListComponent, PatrocinadorDetailComponent, PatrocinadorCreateComponent, PatrocinadorEditComponent],
  providers: [
      PatrocinadorService
  ],
  exports: [
    PatrocinadorListComponent,
    PatrocinadorDetailComponent,
    PatrocinadorCreateComponent,
    PatrocinadorEditComponent
  ]
})
export class PatrocinadorModule { }
