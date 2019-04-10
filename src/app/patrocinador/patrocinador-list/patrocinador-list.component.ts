import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';

import { PatrocinadorService } from '../patrocinador.service';
import { Patrocinador } from '../patrocinador';
import { PatrocinadorDetail } from '../patrocinador-detail';

@Component({
  selector: 'app-patrocinador-list',
  templateUrl: './patrocinador-list.component.html',
  styleUrls: ['./patrocinador-list.component.css']
})
export class PatrocinadorListComponent implements OnInit {

  constructor(
    private patrocinadorService: PatrocinadorService ) { }
    
     /**
    * The list of patrocinadores which belong to Eventos
    */
    patrocinadores: Patrocinador[];
    
    /**
    * The id of the patrocinador that the user wants to view
    */
    patrocinador_id: number;
    
    /**
     * the patrocinador that the user views.
     */
    selectedPatrocinador : Patrocinador;
    
    
    /**
    * Shows the patrocinador
    */
    onSelected(patrocinador_id: number):void {
        this.patrocinador_id = patrocinador_id;
        this.selectedPatrocinador = new PatrocinadorDetail();
        this.getPatrocinadorDetail();
    }
    
    /**
    * Asks the service to update the list of patrocinadores
    */
    getPatrocinadores(): void {
        this.patrocinadorService.getPatrocinadores()
            .subscribe(patrocinadores => {
                this.patrocinadores = patrocinadores;
            });
    }

    getPatrocinadorDetail(): void {
        this.patrocinadorService.getPatrocinadorDetail(this.patrocinador_id)
            .subscribe(selectedPatrocinador => {
                this.selectedPatrocinador = selectedPatrocinador
            });
    }
    /**
    * This will initialize the component by retrieving the list of patrocinadores from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.selectedPatrocinador = undefined;
        this.patrocinador_id = undefined;
        this.getPatrocinadores();
    }

}
