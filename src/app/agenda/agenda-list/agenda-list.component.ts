import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

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


    /**
    * Shows the agenda
    */
    onSelected(agenda_id: number): void {
        this.showCreate = false;
        this.showEdit = false;
        this.showView = true;
        this.agenda_id = agenda_id;
        this.selectedAgenda = new AgendaDetail();
        this.getAgendaDetail();
    }

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showView = false;
        this.showEdit = false;
        this.showCreate = !this.showCreate;
    }

    /**
    * Shows or hides the create component
    */
    showHideEdit(agenda_id: number): void {
        if (!this.showEdit || (this.showEdit && agenda_id != this.selectedAgenda.id)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.agenda_id = agenda_id;
            this.selectedAgenda = new AgendaDetail();
            this.getAgendaDetail();
        }
        else {
            this.showEdit = false;
            this.showView = true;
        }
    }

    /**
    * Asks the service to update the list of agendas
    */
    getAgendas(): void {
        this.agendaService.getAgendas()
            .subscribe(agendas => {
                this.agendas = agendas;
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
        this.showCreate = false;
        this.showView = false;
        this.showEdit = false;
        this.selectedAgenda = undefined;
        this.agenda_id = undefined;
        this.getAgendas();
    }
}