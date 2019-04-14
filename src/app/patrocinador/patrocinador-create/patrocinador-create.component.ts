import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
import { PatrocinadorService } from '../patrocinador.service';

import { Patrocinador } from '../patrocinador';

@Component({
  selector: 'app-patrocinador-create',
  templateUrl: './patrocinador-create.component.html',
  styleUrls: ['./patrocinador-create.component.css']
})
export class PatrocinadorCreateComponent implements OnInit {

  constructor(
  
        private patrocinadorService: PatrocinadorService,
        private toastrService: ToastrService,
        private router: Router      
  ) { }

    /**
    * The new patrocinador
    */
    patrocinador: Patrocinador;
    
/**
    * Cancels the creation of the new book
    * Redirects to the books' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('The Patrocinador wasn\'t created', 'Patrocinador creation');
        this.router.navigate(['/patrocinadores/list']);
    }

    /**
    * Creates a new Patrocinador
    */
    createPatrocinador(): Patrocinador {
        this.patrocinadorService.createPatrocinador(this.patrocinador)
            .subscribe(patrocinador => {
                this.patrocinador.id = patrocinador.id;
                this.router.navigate(['/patrocinador/' + patrocinador.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.patrocinador;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.patrocinador = new Patrocinador();

    }
}
