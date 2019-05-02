import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
import { OrganizadorService } from '../organizador.service';

import { Organizador } from '../organizador';

@Component({
  selector: 'app-organizador-create',
  templateUrl: './organizador-create.component.html',
  styleUrls: ['./organizador-create.component.css']
})
export class OrganizadorCreateComponent implements OnInit {

  constructor(
  
        private organizadorService: OrganizadorService,
        private toastrService: ToastrService,
        private router: Router      
  ) { }

    /**
    * The new organizador
    */
    organizador: Organizador;
    
/**
    * Cancels the creation of the new organizador
    * Redirects to the organizador' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('The Organizador wasn\'t created', 'Organizador creation');
        this.router.navigate(['/organizadores/list']);
    }

    /**
    * Creates a new Organizador
    */
    createOrganizador(): Organizador {
        this.organizadorService.createOrganizador(this.organizador)
            .subscribe(organizador => {
                this.organizador.id = organizador.id;
                this.router.navigate(['/organizadores/' + organizador.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.organizador;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.organizador = new Organizador();

    }
}

