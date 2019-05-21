import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {EventoService} from '../evento.service';
import {Evento}from '../evento';


@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.css'],
    providers: [DatePipe]

})
export class EventoCreateComponent implements OnInit {

  constructor(
        private dp: DatePipe,
        private eventoService: EventoService,
        //private organizadorService:OrganizadorService,
        private router: Router,
        private toastrService: ToastrService

    ) {}

evento:Evento;

 
/**entradasEvento:Entrada[];
patrocinadoresEvento:Patrocinador[];
organizadoresEvento:Organizador[];
agendasEvento:Agenda[];

@agendasEvento:Agenda[];*/
@Output() cancel=new EventEmitter();
@Output() create=new EventEmitter();

 
 cancelCreation(): void {
        this.toastrService.warning('El evento  no fue creado', 'Evento creation');
        this.router.navigate(['/eventos/list']);
    }



/**
    * Creates a new evento
    */
    
 
createEvento(): Evento {
    let element = <HTMLInputElement> document.getElementById("eventoPrivado");  
if (element.checked) { this.evento.privado=true;}
if(!element.checked){
    this.evento.privado=false;
}
        let dateI: Date = new Date(this.evento.fechaInicio.year, this.evento.fechaInicio.month - 1, this.evento.fechaInicio.day);
        let dateF: Date = new Date(this.evento.fechaFin.year, this.evento.fechaFin.month - 1, this.evento.fechaFin.day);

          this.evento.fechaFin = this.dp.transform(dateF, 'yyyy-MM-dd');   
          this.evento.fechaFin += "T00:00:00-00:00"
          
         this.evento.fechaInicio = this.dp.transform(dateI, 'yyyy-MM-dd');
         this.evento.fechaInicio += "T00:00:00-00:00"


        this.eventoService.createEvento(this.evento)
            .subscribe(e => {

                this.evento.id = e.id;
                this.create.emit();
                this.router.navigate(['/eventos/list']);
                this.toastrService.success("El evento fue creado","evento creation")
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.evento;
    }
 
  ngOnInit() {
        this.evento = new Evento();
    }
 
}
