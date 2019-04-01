import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizadorListComponent } from '../organizador/organizador-list/organizador-list.component';
import { OrganizadorDetailComponent } from '../organizador/organizador-detail/organizador-detail.component';
import {OrganizadorService} from './organizador.service';
import { OrganizadorCreateComponent } from '../organizador/organizador-create/organizador-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrganizadorListComponent, OrganizadorDetailComponent, OrganizadorCreateComponent],
  providers: [
      OrganizadorService
  ],
  exports: [
    OrganizadorListComponent,
    OrganizadorDetailComponent,
    OrganizadorCreateComponent
  ]
})
export class OrganizadorModule { }
