import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {EventoService} from '../evento.service';
import {Evento}from '../evento';

import {PatrocinadorService}from'../../patrocinador/patrocinador.service';
import {Patrocinador}from'../../patrocinador/patrocinador';
import {OrganizadorService}from'../../organizador/organizador.service';
import {Organizador}from'../../organizador/organizador';



@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.css']
})
export class EventoCreateComponent implements OnInit {

  constructor(
        private dp: DatePipe,
        private eventoService: EventoService,
        private toastrService: ToastrService,
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
                this.toastrService.error(err, 'Error');
            });
        return this.evento;
    }



  ngOnInit() {
        this.evento = new Evento();
    }

}
