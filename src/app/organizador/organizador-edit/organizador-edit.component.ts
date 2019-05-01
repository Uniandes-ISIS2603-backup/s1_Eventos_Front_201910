import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {OrganizadorService} from '../organizador.service';
import {OrganizadorDetail} from '../organizador-detail';

@Component({
  selector: 'app-organizador-edit',
  templateUrl: './organizador-edit.component.html',
  styleUrls: ['./organizador-edit.component.css']
})
export class OrganizadorEditComponent implements OnInit {

  constructor(
        private organizadorService: OrganizadorService,
        private toastrService: ToastrService,
        private router: Router,
        private route: ActivatedRoute
  
  ) { }

  /**
    * The organizador which will be updated
    */
    organizador: OrganizadorDetail

    organizador_id: number;
    
     /**
    * Retrieves the information of the organizador which will be updated
    */
    getOrganizador(): void {
        this.organizadorService.getOrganizadorDetail(this.organizador_id)
            .subscribe(organizador => {
            this.organizador = organizador;

        });
    }
    
     /**
    * Cancels the edition of the organizador
    */
    cancelEdition(): void {
        this.toastrService.warning('The organizador wasn\'t edited', 'Organizador edition');
        this.router.navigate(['/organizadores/' + this.organizador.id]);
    }
    
        /**
    * This function updates the organizador
    */
    updateOrganizador(): void {
            this.organizadorService.updateOrganizador(this.organizador)
                .subscribe(() => {
                    this.router.navigate(['/organizadores/' + this.organizador.id]);
                    this.toastrService.success("The organizador was successfully edited", 'Organizador edition');
                });
        
    }

  ngOnInit() {
      
      this.organizador_id = +this.route.snapshot.paramMap.get('id');
        if (this.organizador_id){
        this.getOrganizador();
        }
  }

}

