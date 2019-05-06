import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {EventoService} from '../evento.service';
import {Evento}from '../evento';




@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.css']
})
export class EventoCreateComponent implements OnInit {

  constructor(
        private eventoService: EventoService,
        private router: Router
    ) {}

evento:Evento;
/**entradasEvento:Entrada[];
patrocinadoresEvento:Patrocinador[];
organizadoresEvento:Organizador[];
agendasEvento:Agenda[];*/


/**
    * Creates a new evento
    */
    createEvento(): Evento {
        /**let dateB: Date = new Date(this.evento.publishingdate.year, this.evento.publishingdate.month - 1, this.evento.publishingdate.day);
        this.evento.publishingdate = this.dp.transform(dateB, 'yyyy-MM-dd');*/
        
        
        this.eventoService.createEvento(this.evento)
            .subscribe(evento => {
                this.evento.id = evento.id;
                this.router.navigate(['/eventos/' + evento.id]);
            }, err => {
            });
        return this.evento;
    }



  ngOnInit() {
        this.evento = new Evento();
    }

}
