import { Component, Input,OnInit,ViewContainerRef } from '@angular/core';
import {PatrocinadorService} from '../patrocinador.service';
import {Patrocinador} from '../patrocinador';
import { forEach } from '@angular/router/src/utils/collection';
import { ModalDialogService } from 'ngx-modal-dialog';
import {  ToastrService } from 'ngx-toastr';
import { PatrocinadorDetail } from '../patrocinador-detail';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';


/**
 * Componente que lista todos los patrocinadores
 */
@Component({
    selector: 'app-patrocinador-list',
    templateUrl: './patrocinador-list.component.html',
    styleUrls: ['./patrocinador-list.component.css']
})
export class PatrocinadorListComponent implements OnInit {

    /**
     * Constructor del componente patrocinador list
     * @param patrocinadorService 
     * @param modalDialogService 
     * @param viewRef 
     * @param toastrService 
     */
    constructor(
        private patrocinadorService: PatrocinadorService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
        ){}


        /**
         * Lista de todos los patrocinadores
         */
        patrocinadores: Patrocinador[];

       

         /**
         * Numero id del patrocinador que se vera en detail
         */
        patrocinador_id: number;

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
         * Variable que almacena el patrocinador seleccionado, para enviarselo al componente detail y que este muestre
         * toda la info
         */
        selectedPatrocinador: PatrocinadorDetail;

        /**
         * Inicializa el arreglo de patrocinadores trayendo la info desde service
         */
        getPatrocinadores(): void{
            this.patrocinadorService.getEventoPatrocinadores(this.evento_id).subscribe(
                patrocinadores => {
                    this.patrocinadores=patrocinadores;
                });
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
         * @param patrocinador_id id del patrocinador seleccionado
         */
        onSelected(patrocinador_id: number){
            console.log('corre');
            this.showCreate=false;
            this.showEdit=false;
            this.showHideView();
            this.patrocinador_id=patrocinador_id;
            this.selectedPatrocinador=new PatrocinadorDetail();
            this.getPatrocinadorDetail();
        }

         /**
        * Metodo que controla la aparicion del componente edit para un detail
        * @param patrocinador_id 
        */
        showHideEdit(patrocinador_id: number): void{
            console.log("llega a showHideEdit");
            console.log(patrocinador_id);
            if(!this.showEdit || (this.showEdit && patrocinador_id!=this.selectedPatrocinador.id)){
               console.log("sí entra adentro");
                 this.showEdit=!this.showEdit;
                this.patrocinador_id=patrocinador_id;
            }
            else{
                this.showEdit=false;
                this.showView=true;
            }
        }

        /**
         * Metodo que obtiene el patrocinador detail
         */
        getPatrocinadorDetail(): void{
            this.patrocinadorService.getPatrocinadorDetail(this.patrocinador_id).subscribe(selectedPatrocinador=>{
                this.selectedPatrocinador=selectedPatrocinador;
            })
        }

        updatePatrocinador(): void{
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
        this.selectedPatrocinador=undefined;
        this.patrocinador_id=undefined;
        this.getPatrocinadores();
        this.showView=false;
    }
        
    }
