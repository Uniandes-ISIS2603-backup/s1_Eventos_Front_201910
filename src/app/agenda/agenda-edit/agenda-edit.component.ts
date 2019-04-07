import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {AgendaService} from '../agenda.service';
import {AgendaDetail} from '../agenda-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-agenda-edit',
    templateUrl: './agenda-edit.component.html',
    styleUrls: ['./agenda-edit.component.css'],
    providers: [DatePipe]
})
export class AgendaEditComponent implements OnInit, OnChanges {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param agendaService The agendas' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private agendaService: AgendaService,
        private toastrService: ToastrService,
    ) {}

    /**
    * The agenda id as received from the parent component
    */
    @Input() agenda: AgendaDetail;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an agenda
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new agenda
    */
    @Output() update = new EventEmitter();

    /**
    * Updates the information of the agenda
    */
    editAgenda(): void {
        let horaFinalb: Date = new Date(this.agenda.horaFinal.year, this.agenda.horaFinal.month - 1, this.agenda.horaFinal.day,this.agenda.horaFinal.hour,this.agenda.horaFinal.minute);
        let horaIniciob: Date = new Date(this.agenda.horaInicio.year, this.agenda.horaInicio.month - 1, this.agenda.horaInicio.day,this.agenda.horaInicio.hour,this.agenda.horaInicio.minute);
        this.agenda.horaFinal = this.dp.transform(horaFinalb, 'yyyy-MM-dd hh:mm');
        this.agenda.horaInicio = this.dp.transform(horaIniciob, 'yyyy-MM-dd hh:mm');
        console.log(this.agenda);
        this.agendaService.updateAgenda(this.agenda)
            .subscribe(() => {
                this.toastrService.success("The agenda's information was updated", "Agenda edition");
            });
        this.update.emit();
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelEdition(): void {
        this.cancel.emit();
    }


    /**
    * This function will initialize the component
    */
    ngOnInit() {
        if (this.agenda && this.agenda.horaInicio) {
            this.agenda.horaInicio = this.agenda.horaInicio.substring(0, 10);
            var date = {
                day: + this.agenda.horaInicio.split('-')[2],
                month: + this.agenda.horaInicio.split('-')[1],
                year: + this.agenda.horaInicio.split('-')[0]
            };
            this.agenda.horaInicio= date;
        }
    }

    /**
    * This function will be called when the user chooses another agenda to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
