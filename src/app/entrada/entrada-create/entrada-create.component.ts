import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

import { EntradaService } from '../entrada.service';
import { Entrada } from '../entrada';

@Component({
  selector: 'app-entrada-create',
  templateUrl: './entrada-create.component.html',
  styleUrls: ['./entrada-create.component.css']
})
export class EntradaCreateComponent implements OnInit {

  constructor(
     private entradaService: EntradaService
  ) { }
  
   /**
    * El nuevo organizador
    */
    entrada: Entrada;

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
      this.entrada = new Entrada();
  }

}