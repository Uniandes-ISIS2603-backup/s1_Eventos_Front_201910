import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';


import { Evento } from '../../evento/evento';
import { EventoService } from '../../evento/evento.service';
@Component({
    selector: 'app-evento-list',
    templateUrl: './evento-list.component.html',
    styleUrls: ['./evento-list.component.css']
})
export class EventoListComponent implements OnInit {

    /**
    * The list of Eventos to display
    */
    @Input() eventos: Evento[];

    /**
    * The component's constructor
    */
    constructor(private eventoService: EventoService,  private route: ActivatedRoute) {  }
    
    allEventos:string = 'no';
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
     this.route.queryParams
      .filter(params => params.allEventos)
      .subscribe(params => {
        console.log(params); 

        this.allEventos = params.allEventos;
        console.log(this.allEventos); 
      });
      if (this.allEventos == 'yes'){
          console.log("allEventos");
      
       this.getEventos();
       }
    }
    
}