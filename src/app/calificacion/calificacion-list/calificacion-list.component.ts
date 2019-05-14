import { Component, Input,OnInit,ViewContainerRef } from '@angular/core';
import {CalificacionService} from '../calificacion.service';
import {Calificacion} from '../calificacion';
import { forEach } from '@angular/router/src/utils/collection';
import { ModalDialogService } from 'ngx-modal-dialog';
import {  ToastrService } from 'ngx-toastr';
import { CalificacionDetail } from '../calificacion-detail';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

/**
 * Componente que lista todos los calificaciones
 */
@Component({
    selector: 'app-calificacion-list',
    templateUrl: './calificacion-list.component.html',
    styleUrls: ['./calificacion-list.component.css']
})
export class CalificacionListComponent implements OnInit {

    /**
     * Constructor del componente calificacion list
     * @param calificacionService 
     * @param modalDialogService 
     * @param viewRef 
     * @param toastrService 
     */
    constructor(
        private calificacionService: CalificacionService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
        ){}

        @Input() eventoId: number;

        /**
         * Lista de todos los calificaciones
         */
        calificaciones: Calificacion[];

       

         /**
         * Numero id del calificacion que se vera en detail
         */
        calificacion_id: number;

         /**
         * Variable que controla la aparicion del componente create
         */
        showCreate: boolean;

         /**
         * Variable que controla la aparicion del componente edit
         */
        showEdit: boolean;

        evento_id: number;

        /**
         * Variable que controla la aparicion del componente showView
         */
        showView: boolean;

        /**
         * Variable que almacena el calificacion seleccionado, para enviarselo al componente detail y que este muestre
         * toda la info
         */
        selectedCalificacion: CalificacionDetail;

        /**
         * Inicializa el arreglo de calificaciones trayendo la info desde service
         */
        getCalificaciones(): void{
            this.calificacionService.getEventoCalificaciones(this.evento_id).subscribe(
                calificaciones => {
                    this.calificaciones=calificaciones;
                });
        }
 
        addDeAcuerdo(): void{
            
        }

        /**
         * Metodo que se encarga de establecer la condicion para que el componente create aparezca o se esconda
         */
        showHideCreate(): void{
            this.showCreate=!this.showCreate;
        }

        /**
         * Metodo que se encarga de establecer la condicion para que el componente detail aparezca o se esconda
         */
        showHideView(): void{
            if(this.showView==true)
                this.showView=false;
            else
                this.showView=true;
            console.log(this.showView);
        }

        /**
         * Metodo que establece las condiciones que se deben dar cuando un usuario de clic sobre un elemento de la lista
         * para que seguidamente aparezca el detail de dicho elemento
         * @param calificacion_id id del calificacion seleccionado
         */
        onSelected(calificacion_id: number){
            console.log('corre');
            this.showCreate=false;
            this.showEdit=false;
            this.showHideView();
            this.calificacion_id=calificacion_id;
            this.selectedCalificacion=new CalificacionDetail();
            this.getCalificacionDetail();
        }

         /**
        * Metodo que controla la aparicion del componente edit para un detail
        * @param calificacion_id 
        */
        showHideEdit(calificacion_id: number): void{
            console.log("llega a showHideEdit");
            console.log(calificacion_id);
            if(!this.showEdit || (this.showEdit && calificacion_id!=this.selectedCalificacion.id)){
               console.log("sí entra adentro");
                 this.showEdit=!this.showEdit;
                this.calificacion_id=calificacion_id;
            }
            else{
                this.showEdit=false;
                this.showView=true;
            }
        }

        /**
         * Metodo que obtiene el calificacion detail
         */
        getCalificacionDetail(): void{
            this.calificacionService.getCalificacionDetail(this.calificacion_id).subscribe(selectedCalificacion=>{
                this.selectedCalificacion=selectedCalificacion;
            })
        }

        updateCalificacion(): void{
            this.showEdit=false;
            this.showView=true;
        }

        /**
         * Al crear el componente, generar las condiciones que se establecen al interior del metodo
         */
    ngOnInit() {
        this.evento_id = + this.route.snapshot.paramMap.get('id');
        console.log("Este es el id"+this.evento_id);
        this.showCreate = false;
        this.showEdit=false;
        this.selectedCalificacion=undefined;
        this.calificacion_id=undefined;
        this.getCalificaciones();
        this.showView=false;
    }
        
    }
