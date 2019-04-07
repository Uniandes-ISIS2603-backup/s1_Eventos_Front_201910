import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {InvitadoService} from '../invitado.service';
import {Invitado} from '../invitado';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-invitado-edit',
    templateUrl: './invitado-edit.component.html',
    styleUrls: ['./invitado-edit.component.css'],
    providers: [DatePipe]
})
export class InvitadoEditComponent implements OnInit, OnChanges {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param invitadoService The invitados' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private invitadoService: InvitadoService,
        private toastrService: ToastrService,
    ) {}

     /**
    * The id of the editorial that the user wants to edit
    * This is passed as a parameter by the parent component
    */
   @Input() invitado_id: number;
    /**
    * The invitado id as received from the parent component
    */
    @Input() invitado: Invitado;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an invitado
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new invitado
    */
    @Output() update = new EventEmitter();

    /**
    * Retrieves the information of the invitado
    */
   getInvitado(): void {
    this.invitadoService.getInvitado(this.invitado_id)
        .subscribe(invitado => {
            this.invitado = invitado;
        });
}
    /**
    * Updates the information of the invitado
    */
    editInvitado(): void {
        
        console.log(this.invitado);
        this.invitadoService.updateInvitado(this.invitado)
            .subscribe(() => {
                this.toastrService.success("The invitado's information was updated", "Invitado edition");
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
        this.invitado = new Invitado();
        this.getInvitado();
    }

    /**
    * This function will be called when the user chooses another invitado to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
