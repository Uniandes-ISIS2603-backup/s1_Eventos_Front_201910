import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import {NgForm} from '@angular/forms';

import { Calificacion } from '../calificacion';
import { DatePipe } from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {CalificacionService} from '../calificacion.service';

/**
 * Componente create calificacion
 */
@Component({
  selector: 'app-calificacion-create',
  templateUrl: './calificacion-create.component.html',
  styleUrls: ['./calificacion-create.component.css'],
  providers: [DatePipe]
})
export class CalificacionCreateComponent implements OnInit {

    /**
   * Constructor del componente calificacion
   * @param dp 
   * @param medioDePagoService 
   * @param toastrService 
   */
    constructor(
        private dp: DatePipe,
        private calificacionService: CalificacionService,
        private toastrService: ToastrService
     ) { }

     /**
   * calificacion a añadir en la base de datos
   */
     calificacion: Calificacion;

        /**
     * Evento para cancelar la creacion
     */
     @Output() cancel = new EventEmitter();

     
    /**
     * Evento para crear un nuevo ejemplo del recurso
     */
     @Output() create = new EventEmitter();


     /**
     * Llama a MedioDePagoService que se encarga de realizar la petición http POST
     */
     createCalificacion(): Calificacion{
         console.log(this.calificacion);
         this.calificacionService.createCalificacion(this.calificacion).subscribe((calificacion)=>{
             this.calificacion = calificacion;
             this.create.emit();
             this.toastrService.success("La calificacion fue creada","Creacion");

         })
         return this.calificacion;
     }

     /**
     * Cancela la creacion del recurso calificacion
     */
     cancelCreation(): void {
        this.cancel.emit();
    }

    /**
   * Al iniciar el componente, cree un calificacion vacio.
   */
     ngOnInit() {
        this.calificacion = new Calificacion();
    }
}