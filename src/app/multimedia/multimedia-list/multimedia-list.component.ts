import { Component, Input,OnInit,ViewContainerRef } from '@angular/core';
import {MultimediaService} from '../multimedia.service';
import {Multimedia} from '../multimedia';
import { forEach } from '@angular/router/src/utils/collection';
import { ModalDialogService } from 'ngx-modal-dialog';
import {  ToastrService } from 'ngx-toastr';
import { MultimediaDetail } from '../multimedia-detail';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';


/**
 * Componente que lista todos los multimedias
 */
@Component({
    selector: 'app-multimedia-list',
    templateUrl: './multimedia-list.component.html',
    styleUrls: ['./multimedia-list.component.css']
})
export class MultimediaListComponent implements OnInit {

    /**
     * Constructor del componente multimedia list
     * @param multimediaService 
     * @param modalDialogService 
     * @param viewRef 
     * @param toastrService 
     */
    constructor(
        private multimediaService: MultimediaService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
        ){}


        /**
         * Lista de todos los multimedias
         */
        multimedias: Multimedia[];

       

         /**
         * Numero id del multimedia que se vera en detail
         */
        multimedia_id: number;

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
         * Variable que almacena el multimedia seleccionado, para enviarselo al componente detail y que este muestre
         * toda la info
         */
        selectedMultimedia: MultimediaDetail;

        /**
         * Inicializa el arreglo de multimedias trayendo la info desde service
         */
        getMultimedias(): void{
            this.multimediaService.getEventoMultimedias(this.evento_id).subscribe(
                multimedias => {
                    this.multimedias=multimedias;
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
         * @param multimedia_id id del multimedia seleccionado
         */
        onSelected(multimedia_id: number){
            console.log('corre');
            this.showCreate=false;
            this.showEdit=false;
            this.showHideView();
            this.multimedia_id=multimedia_id;
            this.selectedMultimedia=new MultimediaDetail();
            this.getMultimediaDetail();
        }

         /**
        * Metodo que controla la aparicion del componente edit para un detail
        * @param multimedia_id 
        */
        showHideEdit(multimedia_id: number): void{
            console.log("llega a showHideEdit");
            console.log(multimedia_id);
            if(!this.showEdit || (this.showEdit && multimedia_id!=this.selectedMultimedia.id)){
               console.log("sí entra adentro");
                 this.showEdit=!this.showEdit;
                this.multimedia_id=multimedia_id;
            }
            else{
                this.showEdit=false;
                this.showView=true;
            }
        }

        /**
         * Metodo que obtiene el multimedia detail
         */
        getMultimediaDetail(): void{
            this.multimediaService.getMultimediaDetail(this.multimedia_id).subscribe(selectedMultimedia=>{
                this.selectedMultimedia=selectedMultimedia;
            })
        }

        updateMultimedia(): void{
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
        this.selectedMultimedia=undefined;
        this.multimedia_id=undefined;
        this.getMultimedias();
        this.showView=false;
    }
        
    }
