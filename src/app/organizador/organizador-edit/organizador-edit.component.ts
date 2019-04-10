import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {OrganizadorService} from '../organizador.service';
import {OrganizadorDetail} from '../organizador-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-organizador-edit',
  templateUrl: './organizador-edit.component.html',
  styleUrls: ['./organizador-edit.component.css']
})
export class OrganizadorEditComponent implements OnInit {

  constructor(
  private organizadorService: OrganizadorService,
  private toastrService: ToastrService
  ) { }

  /**
    * The id of the organizador that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    @Input() organizador_id: number;

/**
    * The organizador id as received from the parent component
    */
    @Input() organizador: OrganizadorDetail;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an organizador
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new organizador
    */
    @Output() update = new EventEmitter();

    /**
    * Retrieves the information of the organizador
    */
    getOrganizador(): void {
        this.organizadorService.getOrganizadorDetail(this.organizador_id)
            .subscribe(organizador => {
                this.organizador = organizador;
            });
    }
    
    /**
    * Updates the information of the organizador
    */
    editOrganizador(): void {
        this.organizadorService.updateOrganizador(this.organizador)
            .subscribe(() => {
                this.toastrService.success("La informa del organizador fue actualizada", "Organizador edition");
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
    * The function which initializes the component
    */
    ngOnInit() {
        this.organizador = new OrganizadorDetail();
        this.getOrganizador();
    }

}
