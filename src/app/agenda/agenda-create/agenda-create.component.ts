import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {AgendaService} from '../agenda.service';
import {Agenda} from '../agenda';

@Component({
    selector: 'app-agenda-create',
    templateUrl: './agenda-create.component.html',
    styleUrls: ['./agenda-create.component.css'],
    providers: [DatePipe]
})
export class AgendaCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param agendaService The agenda's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private agendaService: AgendaService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new agenda
    */
    agenda: Agenda;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an agenda
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new agenda
    */
    @Output() create = new EventEmitter();

    /**
    * Creates an agenda
    */
    createAgenda(): Agenda {

        let horaFinalb: Date = new Date(this.agenda.horaFinal.year, this.agenda.horaFinal.month - 1, this.agenda.horaFinal.day,this.agenda.horaFinal.hour,this.agenda.horaFinal.minute);
        let horaIniciob: Date = new Date(this.agenda.horaInicio.year, this.agenda.horaInicio.month - 1, this.agenda.horaInicio.day,this.agenda.horaInicio.hour,this.agenda.horaInicio.minute);
        this.agenda.horaFinal = this.dp.transform(horaFinalb, 'yyyy-MM-dd hh:mm');
        this.agenda.horaInicio = this.dp.transform(horaIniciob, 'yyyy-MM-dd hh:mm');
        console.log(this.agenda);
        this.agendaService.createAgenda(this.agenda)
            .subscribe((agenda) => {
                this.agenda = agenda;
                this.create.emit();
                this.toastrService.success("The agenda was created", "Agenda creation");

            });
        return this.agenda;
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.agenda = new Agenda();
    }

}
