import { Component, OnInit, Input,ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
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
      private route: ActivatedRoute) {  }
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
    * The method which initializes the component
    */
    ngOnInit() {
     
       this.getEventos();
    }
    }
    
