import { Component, Input,OnInit,ViewContainerRef } from '@angular/core';
import {InvitadoService} from '../invitado.service';
import {Invitado} from '../invitado';
import { forEach } from '@angular/router/src/utils/collection';
import { ModalDialogService } from 'ngx-modal-dialog';
import {  ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';


/**
 * Componente que lista todos los invitados
 */
@Component({
    selector: 'app-invitado-list',
    templateUrl: './invitado-list.component.html',
    styleUrls: ['./invitado-list.component.css']
})
export class InvitadoListComponent implements OnInit {

    /**
     * Constructor del componente invitado list
     * @param invitadoService 
     * @param modalDialogService 
     * @param viewRef 
     * @param toastrService 
     */
    constructor(
        private invitadoService: InvitadoService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
        ){}

public isCollapsed = {};
        /**
         * Lista de todos los invitados
         */
        invitados: Invitado[];

       

         /**
         * Numero id del invitado que se vera en detail
         */
        invitado_id: number;

         /**
         * Variable que controla la aparicion del componente create
         */
        showCreate: boolean;

         /**
         * Variable que controla la aparicion del componente edit
         */
        showEdit: boolean;

        agenda_id: number;

        /**
         * Variable que controla la aparicion del componente showView
         */
        showView: boolean;

        /**
         * Variable que almacena el invitado seleccionado, para enviarselo al componente detail y que este muestre
         * toda la info
         */
        selectedInvitado: Invitado;

        /**
         * Inicializa el arreglo de invitados trayendo la info desde service
         */
        getInvitados(): void{
            this.invitadoService.getAgendaInvitados(this.agenda_id).subscribe(
                invitados => {
                    this.invitados=invitados;
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
         * @param invitado_id id del invitado seleccionado
         */
        onSelected(invitado_id: number){
            console.log('corre');
            this.showCreate=false;
            this.showEdit=false;
            this.showHideView();
            this.invitado_id=invitado_id;
            this.selectedInvitado=new Invitado();
            this.getInvitadoDetail();
        }

         /**
        * Metodo que controla la aparicion del componente edit para un detail
        * @param invitado_id 
        */
        showHideEdit(invitado_id: number): void{
            console.log("llega a showHideEdit");
            console.log(invitado_id);
            if(!this.showEdit || (this.showEdit && invitado_id!=this.selectedInvitado.id)){
               console.log("sí entra adentro");
                 this.showEdit=!this.showEdit;
                this.invitado_id=invitado_id;
            }
            else{
                this.showEdit=false;
                this.showView=true;
            }
        }

        /**
         * Metodo que obtiene el invitado detail
         */
        getInvitadoDetail(): void{
            this.invitadoService.getInvitado(this.invitado_id).subscribe(selectedInvitado=>{
                this.selectedInvitado=selectedInvitado;
            })
        }

        updateInvitado(): void{
            this.showEdit=false;
            this.showView=true;
        }

        /**
         * Al crear el componente, generar las condiciones que se establecen al interior del metodo
         */
    ngOnInit() {
        this.agenda_id = + this.route.snapshot.paramMap.get('id');
        console.log("Este es el id"+this.agenda_id);
        this.showCreate = false;
        this.showEdit=false;
        this.selectedInvitado=undefined;
        this.invitado_id=undefined;
        this.getInvitados();
        this.showView=false;
    }
        
    }
