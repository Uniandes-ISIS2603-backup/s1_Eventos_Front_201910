import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatrocinadorListComponent } from '../Patrocinador/patrocinador-list/patrocinador-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PatrocinadorListComponent],
  exports: [PatrocinadorListComponent]
})
export class PatrocinadorModule { }
