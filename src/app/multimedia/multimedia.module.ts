import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {MultimediaService} from './multimedia.service';
import { MultimediaListComponent } from './multimedia-list/multimedia-list.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [MultimediaListComponent],
  providers: [MultimediaService],
  bootstrap: [MultimediaListComponent]
})
export class MultimediaModule { }
