import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatrocinadorListComponent } from '../patrocinador/patrocinador-list/patrocinador-list.component';
import { PatrocinadorDetailComponent } from '../patrocinador/patrocinador-detail/patrocinador-detail.component';
import { PatrocinadorService} from './patrocinador.service';
import { PatrocinadorCreateComponent } from '../patrocinador/patrocinador-create/patrocinador-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PatrocinadorListComponent, PatrocinadorDetailComponent, PatrocinadorCreateComponent],
  providers: [
      PatrocinadorService
  ],
  exports: [
    PatrocinadorListComponent,
    PatrocinadorDetailComponent,
    PatrocinadorCreateComponent
  ]
})
export class PatrocinadorModule { }
