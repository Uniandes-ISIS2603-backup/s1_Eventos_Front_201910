import { Component, Input,OnInit,ViewContainerRef } from '@angular/core';
import {UbicacionService} from '../ubicacion.service';
import {Ubicacion} from '../ubicacion'; 
import { forEach } from '@angular/router/src/utils/collection';
import { ModalDialogService } from 'ngx-modal-dialog';
import {  ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';


/**
 * Componente que lista todos los ubicaciones
 */
@Component({
    selector: 'app-ubicacion-list',
    templateUrl: './ubicacion-list.component.html',
    styleUrls: ['./ubicacion-list.component.css']
})
export class UbicacionListComponent implements OnInit {

    /**
     * Constructor del componente ubicacion list
     * @param ubicacionService 
     * @param modalDialogService 
     * @param viewRef 
     * @param toastrService 
     */
    constructor(
        private ubicacionService: UbicacionService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
        ){}

public isCollapsed = {};
        /**
         * Lista de todos los ubicaciones
         */
        ubicaciones: Ubicacion[];

       

         /**
         * Numero id del ubicacion que se vera en detail
         */
        ubicacion_id: number;

         /**
         * Variable que controla la aparicion del componente create
         */
        showCreate: boolean;

         /**
         * Variable que controla la aparicion del componente edit
         */
        showEdit: boolean;


        /**
         * Variable que controla la aparicion del componente showView
         */
        showView: boolean;

        /**
         * Variable que almacena el ubicacion seleccionado, para enviarselo al componente detail y que este muestre
         * toda la info
         */
        selectedUbicacion: Ubicacion;

        /**
         * Inicializa el arreglo de ubicaciones trayendo la info desde service
         */
        getUbicaciones(): void{
            this.ubicacionService.getUbicaciones().subscribe(
                ubicaciones => {
                    this.ubicaciones=ubicaciones;
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
         * @param ubicacion_id id del ubicacion seleccionado
         */
        onSelected(ubicacion_id: number){
            console.log('corre');
            this.showCreate=false;
            this.showEdit=false;
            this.showHideView();
            this.ubicacion_id=ubicacion_id;
            this.selectedUbicacion=new Ubicacion();
            this.getUbicacion();
        }

         /**
        * Metodo que controla la aparicion del componente edit para un detail
        * @param ubicacion_id 
        */
        showHideEdit(ubicacion_id: number): void{
            console.log("llega a showHideEdit");
            console.log(ubicacion_id);
            if(!this.showEdit || (this.showEdit && ubicacion_id!=this.selectedUbicacion.id)){
               console.log("sí entra adentro");
                 this.showEdit=!this.showEdit;
                this.ubicacion_id=ubicacion_id;
            }
            else{
                this.showEdit=false;
                this.showView=true;
            }
        }

        /**
         * Metodo que obtiene el ubicacion detail
         */
        getUbicacion(): void{
            this.ubicacionService.getUbicacion(this.ubicacion_id).subscribe(selectedUbicacion=>{
                this.selectedUbicacion=selectedUbicacion;
            })
        }

        updateUbicacion(): void{
            this.showEdit=false;
            this.showView=true;
        }

        /**
         * Al crear el componente, generar las condiciones que se establecen al interior del metodo
         */
    ngOnInit() {
        this.showCreate = false;
        this.showEdit=false;
        this.selectedUbicacion=undefined;
        this.ubicacion_id=undefined;
        this.getUbicaciones();
        this.showView=false;
    }
        
    }
