import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { EventoService } from '../evento.service';
import { EventoDetail } from '../evento-detail';
@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.css']
})
export class EventoDetailComponent implements OnInit {

  constructor(
  private eventoService: EventoService,
        private route: ActivatedRoute,
        private router: Router) { }

/**
    * The evento's id retrieved from the path
    */
    evento_id: number;

    /**
    * The evento whose details are shown
    */
    eventoDetail: EventoDetail;

 getEventoDetail(): void {
         this.eventoService.getEventoDetail(this.evento_id)
            .subscribe(eventoDetail => {
                this.eventoDetail = eventoDetail;
            });
    }

 ngOnInit() {
        this.evento_id = + this.route.snapshot.paramMap.get('id');
        this.eventoDetail = new EventoDetail();
        this.getEventoDetail();
        
    }

}
