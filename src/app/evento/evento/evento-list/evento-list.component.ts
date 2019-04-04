import { Component, OnInit } from '@angular/core';
import {Evento} from '../../evento';
import  {EventoService} from '../../evento.service';

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.css']
})
export class EventoListComponent implements OnInit {

  constructor(
  private eventoService: EventoService ) { }
  
  eventos: Evento[];
  
   getEventos(): void {
        this.eventoService.getEventos()
            .subscribe(e => {
                this.eventos = e;
            });
    }

    /**
    * This will initialize the component by retrieving the list of authors from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.getEventos();
    }

}
