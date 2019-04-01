import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizadorListComponent } from '../organizador/organizador-list/organizador-list.component';
import { OrganizadorDetailComponent } from '../organizador/organizador-detail/organizador-detail.component';
import {OrganizadorService} from './organizador.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrganizadorListComponent, OrganizadorDetailComponent],
  providers: [
      OrganizadorService
  ],
  exports: [
    OrganizadorListComponent,
    OrganizadorDetailComponent
  ]
})
export class OrganizadorModule { }
