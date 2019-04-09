import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbicacionService} from './ubicacion.service';

import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
      CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [],
providers : [],
bootstrap:[ ],
  exports:[ ]

})
export class UbicacionModule { }
