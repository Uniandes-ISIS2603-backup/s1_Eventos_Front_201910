import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import {NgForm} from '@angular/forms';

import { EntradaService } from '../entrada.service';
import { DatePipe } from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import { Entrada } from '../entrada';

@Component({
  selector: 'app-entrada-create',
  templateUrl: './entrada-create.component.html',
  styleUrls: ['./entrada-create.component.css'],
  providers: [DatePipe]
})
export class EntradaCreateComponent implements OnInit {

  constructor(
    private dp: DatePipe,
     private entradaService: EntradaService,
     private toastrService: ToastrService
  ) { }
  
   /**
    * El nuevo organizador
    */
    entrada: Entrada;

    evento_id: number;

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

    createEntrada():Entrada{
      this.entradaService.createEntrada(this.entrada).subscribe((entrada)=>{
        this.entrada=entrada;
        this.create.emit();
        this.toastrService.success("La entrada fue creada","Creacion");
      })
      return this.entrada;
    }

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