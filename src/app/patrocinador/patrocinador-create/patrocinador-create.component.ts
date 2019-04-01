import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

import { PatrocinadorService } from '../patrocinador.service';
import { Patrocinador } from '../patrocinador';

@Component({
  selector: 'app-patrocinador-create',
  templateUrl: './patrocinador-create.component.html',
  styleUrls: ['./patrocinador-create.component.css']
})
export class PatrocinadorCreateComponent implements OnInit {

  constructor(
    private patrocinadorService: PatrocinadorService
  ) { }
  
    /**
    * El nuevo patrocinador
    */
    patrocinador: Patrocinador;

/**
    * The output which tells the parent component
    * that the user no longer wants to create an patrocinador
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new patrocinador
    */
    @Output() create = new EventEmitter();

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }
    
  ngOnInit() {
      
      this.patrocinador = new Patrocinador();
  }

}
