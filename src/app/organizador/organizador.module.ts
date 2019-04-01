import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizadorListComponent } from '../Organizador/organizador-list/organizador-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrganizadorListComponent],
  exports: [OrganizadorListComponent]
})
export class OrganizadorModule { }
