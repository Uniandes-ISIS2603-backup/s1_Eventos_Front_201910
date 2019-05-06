import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import {NgForm} from '@angular/forms';

import { Calificacion } from '../calificacion';
import { DatePipe } from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {CalificacionService} from '../calificacion.service';
import { ActivatedRoute } from '@angular/router';

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
        private route: ActivatedRoute,
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

     evento_id: number;

     /**
     * Llama a MedioDePagoService que se encarga de realizar la petición http POST
     */
     createCalificacion(): Calificacion{
         console.log(this.calificacion);
         console.log(' SE LLAMA AL CREATE CALIF')
         this.calificacionService.createCalificacion(this.calificacion).subscribe((calificacion)=>{
             this.calificacion = calificacion;
             this.create.emit();
             this.toastrService.success("La calificacion fue creada","Creacion");

         })

         this.calificacionService.createEventoCalificacion(this.evento_id,this.calificacion.id,this.calificacion);
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
        this.evento_id = + this.route.snapshot.paramMap.get('id');
        console.log('el evento es: '+this.evento_id);
    }
}