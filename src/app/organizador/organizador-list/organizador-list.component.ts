import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';

import { OrganizadorService } from '../organizador.service';
import { Organizador } from '../organizador';
import { OrganizadorDetail } from '../organizador-detail';

@Component({
  selector: 'app-organizador-list',
  templateUrl: './organizador-list.component.html',
  styleUrls: ['./organizador-list.component.css']
})
export class OrganizadorListComponent implements OnInit {

  constructor(
     private organizadorService: OrganizadorService ) { }
         
   /**
    * The list of organizadores which belong to Eventos
    */
    organizadores: Organizador[];
    
    /**
    * The id of the organizador that the user wants to view
    */
    organizador_id: number;
    
    /**
     * the organizador that the user views.
     */
    selectedOrganizador : Organizador;
    
    
    /**
    * Shows the organizador
    */
    onSelected(organizador_id: number):void {
        this.organizador_id = organizador_id;
        this.selectedOrganizador = new OrganizadorDetail();
        this.getOrganizadorDetail();
    }
    
    /**
    * Asks the service to update the list of organizadores
    */
    getOrganizadores(): void {
        this.organizadorService.getOrganizadores()
            .subscribe(organizadores => {
                this.organizadores = organizadores;
            });
    }

    getOrganizadorDetail(): void {
        this.organizadorService.getOrganizadorDetail(this.organizador_id)
            .subscribe(selectedOrganizador => {
                this.selectedOrganizador = selectedOrganizador
            });
    }
    /**
    * This will initialize the component by retrieving the list of organizadores from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.selectedOrganizador = undefined;
        this.organizador_id = undefined;
        this.getOrganizadores();
    }

}
