import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgendaService } from '../agenda.service';
import { AgendaDetail } from '../agenda-detail';

@Component({
    selector: 'app-agenda-detail',
    templateUrl: './agenda-detail.component.html',
    styleUrls: ['./agenda-detail.component.css']
})
export class AgendaDetailComponent implements OnInit {

    /**
    * The agenda
    */
    @Input() agendaDetail: AgendaDetail;
    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param agendaService The agenda's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private agendaService: AgendaService 
    ) { }

    
    

    /**
    * El id del agenda que viene en el path get .../agendas/agenda_id
    */
    agenda_id: number;
    /**
    * The method which obtains the agenda whose details we want to show
    */
    getAgendaDetail(): void {
        this.agendaService.getAgendaDetail(this.agenda_id)
            .subscribe(agendaDetail => {
                this.agendaDetail = agendaDetail
            });
    }

   
    /**
    * The method which initializes the component.
    * We need to create the agenda so it is never considered as undefined
    */
    ngOnInit() {
        this.agenda_id = +this.route.snapshot.paramMap.get('id');
        if (this.agenda_id){
        this.agendaDetail = new AgendaDetail();
        this.getAgendaDetail();
        }
    }
}
