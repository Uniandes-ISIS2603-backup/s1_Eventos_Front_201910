import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import {NgForm} from '@angular/forms';

import { Calificacion } from '../calificacion';
import { DatePipe } from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {CalificacionService} from '../calificacion.service';

@Component({
  selector: 'app-calificacion-create',
  templateUrl: './calificacion-create.component.html',
  styleUrls: ['./calificacion-create.component.css'],
  providers: [DatePipe]
})
export class CalificacionCreateComponent implements OnInit {

    constructor(
        private dp: DatePipe,
        private calificacionService: CalificacionService,
        private toastrService: ToastrService
     ) { }

     calificacion: Calificacion;

     @Output() cancel = new EventEmitter();

     @Output() create = new EventEmitter();

     createCalificacion(): Calificacion{
         console.log(this.calificacion);
         this.calificacionService.createCalificacion(this.calificacion).subscribe((calificacion)=>{
             this.calificacion = calificacion;
             this.create.emit();
             this.toastrService.success("La calificacion fue creada","Creacion");

         })
         return this.calificacion;
     }

     cancelCreation(): void {
        this.cancel.emit();
    }

    
     ngOnInit() {
        this.calificacion = new Calificacion();
    }
}