import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';


import { Agenda } from '../../agenda/agenda';
import { AgendaService } from '../../agenda/agenda.service';
@Component({
    selector: 'app-agenda-list',
    templateUrl: './agenda-list.component.html',
    styleUrls: ['./agenda-list.component.css']
})
export class AgendaListComponent implements OnInit {

    /**
    * The list of Agendas to display
    */
    @Input() agendas: Agenda[];

    /**
    * The component's constructor
    */
    constructor(private AgendaService: AgendaService,  private route: ActivatedRoute) {  }
    
    allAgendas:string = 'no';
    /**
    * This method retrieves all the Agendas in the Agendastore to show them in the list
    */
    getAgendas(): void {
        this.AgendaService.getAgendas()
            .subscribe(Agendas => {
                this.agendas = Agendas;
            });
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
     this.route.queryParams
      .filter(params => params.allAgendas)
      .subscribe(params => {
        console.log(params); 

        this.allAgendas = params.allAgendas;
        console.log(this.allAgendas); 
      });
      if (this.allAgendas == 'yes'){
          console.log("allAgendas");
      
       this.getAgendas();
       }
    }
    
}
