import { Component, OnInit, Input,ViewContainerRef } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import 'rxjs/add/operator/filter';


import { Evento } from '../../evento/evento';
import { EventoService } from '../../evento/evento.service';
import { EventoDetail} from '../../evento/evento-detail';

@Component({
    selector: 'app-evento-list',
    templateUrl: './evento-list.component.html',
    styleUrls: ['./evento-list.component.css']
})
export class EventoListComponent implements OnInit {

    /**
    * The list of Eventos to display
    */
    @Input() 
    eventos: Evento[];

    selectedEvento: Evento;
    
    showCreate:boolean;
    
    showEdit: boolean;
    
    evento_id: number;


    /**
    * The component's constructor
    */
    constructor(
    private eventoService: EventoService,
      private route: ActivatedRoute,
      private modalDialogService: ModalDialogService,
        private router: Router,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
      ) {  }
/**
    * Shows the evento
    */
    onSelected(evento_id: number): void {
        this.showCreate = false;
        this.showEdit = false;
        this.evento_id = evento_id;
        this.selectedEvento = new EventoDetail();
    }
    
    /**
    * Shows or hides the create component
    */
    showHideEdit(evento_id: number): void {
        if (!this.showEdit || (this.showEdit && evento_id != this.selectedEvento.id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.evento_id = evento_id;
            this.selectedEvento = new EventoDetail();
        }
        else {
            this.showEdit = false;
        }
    }
    
/**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showEdit = false;
        this.showCreate = !this.showCreate;
    }

 /**
    * This method retrieves all the Eventos in the Eventostore to show them in the list
    */
    getEventos(): void {
        this.eventoService.getEventos()
            .subscribe(eventos => {
                this.eventos = eventos;
            });
    }
   
    /**
    * Esta función elimina el evento de la genda de eventos universitarios 
    */
    /**
    * Deletes an editorial
    */
    deleteEvento(eventoId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete an editorial',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this evento from Eventos?'},
            actionButtons: [
                {
                    text: 'Eliminar',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.eventoService.deleteEvento(eventoId).subscribe(() => {
                            this.toastrService.error("El evento was successfully deleted", "Evento deleted");
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'Cancelar', onAction: () => true}
            ]
        });
    }


    /**
    * The method which initializes the component
    */
    ngOnInit() {
     
       this.getEventos();
    }
    }
    
