import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {InvitadoService} from '../invitado.service';
import {Invitado} from '../invitado';

@Component({
    selector: 'app-invitado-create',
    templateUrl: './invitado-create.component.html',
    styleUrls: ['./invitado-create.component.css'],
    providers: [DatePipe]
})
export class InvitadoCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param invitadoService The invitado's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private invitadoService: InvitadoService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new invitado
    */
    invitado: Invitado;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an invitado
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new invitado
    */
    @Output() create = new EventEmitter();

    /**
    * Creates an invitado
    */
    createInvitado(): Invitado {

        console.log(this.invitado);
        this.invitadoService.createInvitado(this.invitado)
            .subscribe((invitado) => {
                this.invitado = invitado;
                this.create.emit();
                this.toastrService.success("The invitado was created", "Invitado creation");

            });
        return this.invitado;
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
        this.invitado = new Invitado();
    }

}
