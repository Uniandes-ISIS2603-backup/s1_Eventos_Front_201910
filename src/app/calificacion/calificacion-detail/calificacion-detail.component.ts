import { Component, Input, OnInit, Output, EventEmitter, ViewContainerRef, ɵConsole } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CalificacionService } from '../calificacion.service';

import { CalificacionDetail } from '../calificacion-detail';
import { Calificacion } from '../calificacion';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { Kalimba } from '../kalimba';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
        private calificacionService: CalificacionService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService,
        private modalDialogService: ModalDialogService 
  ) { }

  /**
   * Variable que almacena el id del calificacion
   *  detail.
   */
    calificacion_id: number;

    kalimba: Kalimba;

    evento_id: number;

    calificacion: number[];

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

    delete(): void{
      console.log('VAMOS A BORRAR A ESTE HP');
      console.log(this.calificacionDetail.id+' EL ID DE LA CALIF A BORRAR');
      this.modalDialogService.openDialog(this.viewRef,{
        title: 'Borrar calificacion',
        childComponent: SimpleModalComponent,
        data: {text: 'Estoy seguro de borrar esta calificacion'},
        actionButtons:[
          {
            text: 'Si',
            buttonClass:'btn btn-danger',
            onAction: ()=>{
              this.calificacionService.deleteCalificacion(this.calificacion_id,this.calificacionDetail.id)
              .subscribe(calif =>{
                this.toastrService.success("La calificacion fue eliminada", "Calificacion eliminada");
              }, err=>{
                this.toastrService.error(err,"Error");
              });
              return true;
            }
          },
          {text: 'No',onAction:()=>true}
        ]
      });
    }
  
    acuerdo(): void{
      console.log('CHOLE CHUUU CHOLE HIJUEPTUA');
      
      this.calificacionDetail.deAcuerdo=(Number(this.calificacionDetail.deAcuerdo)+1)+'';
      this.calificacionService.updateCalificacion(this.calificacion_id,this.calificacionDetail.id,this.calificacionDetail)
      .subscribe(()=>{
        this.toastrService.success("Se actualizo la calificacion");
      })
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
      console.log(this.calificacion_id+'TODOS LOS NIÑOS QUEREMOS CARIÑO, ABRAZOS Y BESOS')
        this.kalimba=new Kalimba();
        this.kalimba.generarNum();
        this.showEdit=false;
        this.calificacion_id = +this.route.snapshot.paramMap.get('id');

        if (this.calificacion_id){
        this.calificacionDetail = new CalificacionDetail();
        this.getCalificacionDetail();
        }
    }
  }