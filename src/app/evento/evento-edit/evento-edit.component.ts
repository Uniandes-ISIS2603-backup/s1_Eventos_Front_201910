    import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {Router, ActivatedRoute} from '@angular/router';
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
        private router: Router

    ) {}

@Input() evento : EventoDetail; 

/**
    * The output which tells the parent component
    * that the user no longer wants to create an author
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new author
    */
    @Output() update = new EventEmitter();
    
 /**
    * This function updates the evento
    */
    updateEvento(): void {
                let dateI: Date = new Date(this.evento.fechaInicio.year, this.evento.fechaInicio.month - 1, this.evento.fechaInicio.day);
                let dateF: Date = new Date(this.evento.fechaFin.year, this.evento.fechaFin.month - 1, this.evento.fechaFin.day);


        this.eventoService.updateEvento(this.evento)
            .subscribe(() => {
                this.router.navigate(['/eventos/' + this.evento.id]);
            });
    }
    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelEdition(): void {
        this.cancel.emit();
    }

 /**
    * This function will be called when the user chooses another author to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }
    
 ngOnInit() {
        if (this.evento && this.evento.fechaInicio) {
            this.evento.fechaInicio = this.evento.fechaInicio.substring(0, 10);
            var date = {
                day: + this.evento.fechaInicio.split('-')[2],
                month: + this.evento.fechaInicio.split('-')[1],
                year: + this.evento.fechaInicio.split('-')[0]
            };
            this.evento.fechaInicio = date;
        }
        if (this.evento && this.evento.fechaFin) {
            this.evento.fechaFin = this.evento.fechaFin.substring(0, 10);
            var date = {
                day: + this.evento.fechaFin.split('-')[2],
                month: + this.evento.fechaFin.split('-')[1],
                year: + this.evento.fechaFin.split('-')[0]
            };
            this.evento.fechaInicio = date; 
        }
    }


}
