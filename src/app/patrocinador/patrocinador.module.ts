import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatrocinadorListComponent } from '../patrocinador/patrocinador-list/patrocinador-list.component';
import { PatrocinadorDetailComponent } from '../patrocinador/patrocinador-detail/patrocinador-detail.component';
import {PatrocinadorService} from './patrocinador.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PatrocinadorListComponent, PatrocinadorDetailComponent],
  providers: [
      PatrocinadorService
  ],
  exports: [
    PatrocinadorListComponent,
    PatrocinadorDetailComponent
  ]
})
export class PatrocinadorModule { }
