import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import { EventoService } from '../evento.service';
import { EventoDetail } from '../evento-detail';
import {Evento} from '../evento'

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.css']
})
export class EventoDetailComponent implements OnInit {

  constructor(
  private eventoService: EventoService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private router: Router,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
    ) { }

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
