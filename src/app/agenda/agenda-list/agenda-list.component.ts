import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';


import {AgendaService} from '../agenda.service';
import {Agenda} from '../agenda';
import {AgendaDetail} from '../agenda-detail';

/**
* The agenda's list component
*/
@Component({
    selector: 'app-agenda',
    templateUrl: './agenda-list.component.html',
    styleUrls: ['./agenda-list.component.css']
})
export class AgendaListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param agendaService The agenda's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private agendaService: AgendaService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private route: ActivatedRoute,
        private toastrService: ToastrService) {}

    /**
    * The list of agendas which belong to the BookStore
    */
    agendas: Agenda[];

    /**
    * The id of the agenda that the user wants to view
    */
    agenda_id: number;

    /**
    * Shows or hides the agenda-create-component
    */
    showCreate: boolean;

    /**
     * Shows or hides the detail of an agenda
     */
    showView: boolean;

    /**
    * Shows or hides the edition of an agenda
    */
    showEdit: boolean;

    /**
     * the agenda that the user views.
     */
    selectedAgenda: Agenda;
    
 evento_id:number;

    /**
    * Shows the agenda
    */
    onSelected(agenda_id: number): void {
        this.showCreate = false;
        this.showEdit = false;
            this.showHideView();
        this.agenda_id = agenda_id;
        this.selectedAgenda = new AgendaDetail();
        this.getAgendaDetail();
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
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showCreate = !this.showCreate;
    }

    /**
    * Shows or hides the create component
    */
    showHideEdit(agenda_id: number): void {
        if (!this.showEdit || (this.showEdit && agenda_id != this.selectedAgenda.id)) {
             console.log("sí entra adentro");
                 this.showEdit=!this.showEdit;
                this.agenda_id=agenda_id;
        }
        else {
             this.showEdit=false;
                this.showView=true;
        }
    }

     /**
         * Inicializa el arreglo de agendas trayendo la info desde service
         */
        getAgendas(): void{
            this.agendaService.getEventoAgendas(this.evento_id).subscribe(
                agendas => {
                    this.agendas=agendas;
                });
        }

    getAgendaDetail(): void {
        this.agendaService.getAgendaDetail(this.agenda_id)
            .subscribe(selectedAgenda => {
                this.selectedAgenda = selectedAgenda
            });
    }

    updateAgenda(): void {
        this.showEdit = false;
        this.showView = true;
    }



    /**
    * This will initialize the component by retrieving the list of agendas from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
       this.evento_id = + this.route.snapshot.paramMap.get('id');
        console.log("Este es el id"+this.evento_id);
        this.showCreate = false;
        this.showEdit=false;
        this.selectedAgenda=undefined;
        this.agendas=undefined;
        this.getAgendas();
        this.showView=false;
    }
}