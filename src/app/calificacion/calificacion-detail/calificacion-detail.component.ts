import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CalificacionService } from '../calificacion.service';

import { CalificacionDetail } from '../calificacion-detail';
import { Calificacion } from '../calificacion';
import { DatePipe } from '@angular/common';
import { CalifEstre } from '../califEstre';

/**
 * Component detail de calificacion
 * 
 */
@Component({
    selector: 'app-calificacion-detail',
    templateUrl: './calificacion-detail.component.html',
    styleUrls: ['./calificacion-detail.component.css'],
    providers: [DatePipe]
  })
  export class CalificacionDetailComponent implements OnInit {

    /**
   * calificacion
   *  que se detallara en el componente. Recibido de calificacion
   * List  
  */
    @Input() calificacionDetail: CalificacionDetail;

    /**
     * Evento cancel, para cerrar el detalle.
     */
    @Output() cancel = new EventEmitter();
    
    /**
     * Constructor del componente detail de calificacion
     * 
     * @param route 
     * @param calificacion
     * Service - service para obtener los datos
     */
    constructor(
        private route: ActivatedRoute,
        private calificacionService: CalificacionService 
  ) { }

  /**
   * Variable que almacena el id del calificacion
   *  detail.
   */
    calificacion_id: number;

    /**
     * Variable para mostar o no el detail
     */
    showEdit: boolean;

    /**
     * Obtiene el calificacion
     *  detail
     */
    getCalificacionDetail(): void {
        this.calificacionService.getCalificacionDetail(this.calificacion_id)
            .subscribe(calificacionDetail => {
                this.calificacionDetail = calificacionDetail
              });
    }

    /**
     * Muestra o esconde el componente edit, cambiando una variable booleana
     */
    showHideEdit(): void{
        this.showEdit=!this.showEdit;
    }

    /**
   * Evento cancel del detail
   */
    cancelView(): void{
      this.cancel.emit();
  }

  /**
 * Al iniciar, realizar las operaciones internas al metodo
 */
    ngOnInit() {
      
        this.showEdit=false;
        this.calificacion_id = +this.route.snapshot.paramMap.get('id');
        if (this.calificacion_id){
        this.calificacionDetail = new CalificacionDetail();
        this.getCalificacionDetail();
        }
    }
  }