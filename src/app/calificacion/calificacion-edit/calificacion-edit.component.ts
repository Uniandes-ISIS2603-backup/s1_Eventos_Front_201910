import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {CalificacionService} from '../calificacion.service';
import {CalificacionDetail} from '../calificacion-detail';
import {ToastrService} from 'ngx-toastr';

/**
 * Componente edit del recurso calificacion
 * 
 */
@Component({
    selector: 'app-calificacion-edit',
    templateUrl: './calificacion-edit.component.html',
    styleUrls: ['./calificacion-edit.component.css']
})
export class CalificacionEditComponent implements OnInit{

     /**
     * Constructor del componente calificacion
     * 
     * @param dp 
     * @param calificacionService 
     * @param toastrService 
     */
    constructor(
        private dp: DatePipe,
        private calificacionaService: CalificacionService,
        private toastrService: ToastrService,
    ){}

    /**
     * calificacion
     *  detail que llega enviado por el componente detail del recurso calificacion
     * 
     */
    @Input() calificacion: CalificacionDetail

    /**
     * Evento que cancela la edicion del calificacion
     * 
     */
    @Output() cancel = new EventEmitter();

    /**
     * Evento que ejecuta la actualizacion de un recurso calificacion
     * 
     */
    @Output() update = new EventEmitter();

    /**
     * Cancela la edicion y emite el evento
     */
    cancelEdition(): void{
        this.cancel.emit();
    }

    /**
     * Se encarga de realizar la solicitud de edicion de recurso calificacion
     *  a calificacionService
     */
    editCalificacion(): void{
        this.calificacionaService.updateCalificacion(this.calificacion).subscribe(()=>{
            this.toastrService.success("La calificación se actualizó", "Calificacion");
        });
        this.update.emit();
    }

    ngOnInit(){
        console.log("enrtaaaaasldkalñsd");
        console.log(this.calificacion);
    }

    ngOnChanges() {
       this.ngOnInit();
    }

    
}