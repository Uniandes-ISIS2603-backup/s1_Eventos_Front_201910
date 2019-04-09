import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

import {EventoService} from '../evento.service';
import {Evento} from '../evento';
import {EventoDetail} from '../evento-detail';

@Component({
  selector: 'app-evento-edit',
  templateUrl: './evento-edit.component.html',
  styleUrls: ['./evento-edit.component.css']
})
export class EventoEditComponent implements OnInit {

  constructor(
        private dp: DatePipe,
        private eventoService: EventoService,
        private toastrService: ToastrService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

evento:Evento;
evento_id:number;

 /**
    * Retrieves the information of the evento which will be updated
    */
    getEvento(): void {
        this.eventoService.getEvento(this.evento_id).subscribe(evento => {
            this.evento = evento;
        });
    }
/**
    * This function updates the evento
    */
    updateEvento(): void {
        this.eventoService.updateEvento(this.evento)
            .subscribe(() => {
                this.router.navigate(['/eventos/' + this.evento.id]);
                this.toastrService.success("The evento was successfully edited", 'Evento edition');
            });
    }

ngOnInit() {
        this.evento_id = +this.route.snapshot.paramMap.get('id');
        this.getEvento();
        
    }


}
