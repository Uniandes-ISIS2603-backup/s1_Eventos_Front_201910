import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {PatrocinadorService} from '../patrocinador.service';
import {PatrocinadorDetail} from '../patrocinador-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-patrocinador-edit',
  templateUrl: './patrocinador-edit.component.html',
  styleUrls: ['./patrocinador-edit.component.css']
})
export class PatrocinadorEditComponent implements OnInit {

  constructor(
  private patrocinadorService: PatrocinadorService,
  private toastrService: ToastrService) { }
   
   /**
    * The id of the patrocinador that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    @Input() patrocinador_id: number;

/**
    * The patrocinador id as received from the parent component
    */
    @Input() patrocinador: PatrocinadorDetail;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an patrocinador
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new patrocinador
    */
    @Output() update = new EventEmitter();

    /**
    * Retrieves the information of the patrocinador
    */
    getPatrocinador(): void {
        this.patrocinadorService.getPatrocinadorDetail(this.patrocinador_id)
            .subscribe(patrocinador => {
                this.patrocinador = patrocinador;
            });
    }
    
    /**
    * Updates the information of the patrocinador
    */
    editPatrocinador(): void {
        this.patrocinadorService.updatePatrocinador(this.patrocinador)
            .subscribe(() => {
                this.toastrService.success("La informa del patrocinador fue actualizada", "Patrocinador edition");
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
        this.patrocinador = new PatrocinadorDetail();
        this.getPatrocinador();
    }

}
