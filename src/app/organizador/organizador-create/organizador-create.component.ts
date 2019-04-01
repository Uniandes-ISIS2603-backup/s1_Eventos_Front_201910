import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

import { OrganizadorService } from '../organizador.service';
import { Organizador } from '../organizador';

@Component({
  selector: 'app-organizador-create',
  templateUrl: './organizador-create.component.html',
  styleUrls: ['./organizador-create.component.css']
})
export class OrganizadorCreateComponent implements OnInit {

  constructor(
     private organizadorService: OrganizadorService
  ) { }
  
   /**
    * El nuevo organizador
    */
    organizador: Organizador;

/**
    * The output which tells the parent component
    * that the user no longer wants to create an organizador
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new organizador
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
      this.organizador = new Organizador();
  }

}
